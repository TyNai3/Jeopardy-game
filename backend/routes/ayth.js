const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const {
    name, email, password, passwordRepit,
  } = req.body;
  try {
    if (password && email && name && passwordRepit) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ status: 'error', message: 'Такой пользователь уже зарегистрирован' });
      }
      if (password.length < 8) {
        res.json({ status: 'error', message: 'Пароль должен содержать не менее 8 символов' });
      }
      if (password === passwordRepit) {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashPassword });
        req.session.user_id = newUser.id;
        res.status(200).json({ message: 'Пользователь зарегистрирован', user: newUser });
      } else {
        res.json({ status: 'error', message: 'Пароли не совпадают' });
      }
    } else {
      res.json({ status: 'error', message: 'Заполните все поля' });
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ status: 'error', message: 'Такого пользователя нет в системе' });
    }
    const passwordHash = await bcrypt.compare(password, user.password);
    if (!passwordHash) {
      res.json({ status: 'error', message: 'Неверный логин или пароль' });
    }
    req.session.user_id = user.id;
    res.json({ status: true });
  } catch (error) {
    res.json({ status: false });
    console.log(error.message);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Session delete error' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router