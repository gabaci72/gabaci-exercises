function validateUser(username, password) {
  if (!username || !password) {
    throw new Error('Kullanıcı adı ve şifre boş bırakılamaz.');
  }

  if (username.length < 5) {
    throw new Error('Kullanıcı adı en az 5 karakter olmalıdır.');
  }

  if (password.length < 8) {
    throw new Error('Şifre en az 8 karakter olmalıdır.');
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error('Şifre en az bir büyük harf içermelidir.');
  }

  if (!/[0-9]/.test(password)) {
    throw new Error('Şifre en az bir rakam içermelidir.');
  }

  return true;
}

function registerUser(username, password) {
  try {
    validateUser(username, password);
    console.log('Kullanıcı kaydı başarılı.');
  } catch (error) {
    console.log('Hata yakalandı:', error.message);
  }
}

// Gerçek değerlerle test edelim
registerUser('user', 'pass'); // Hata fırlatacak
registerUser('username', 'password123'); // Hata fırlatacak
registerUser('username', 'Password123'); // Başarılı olacak