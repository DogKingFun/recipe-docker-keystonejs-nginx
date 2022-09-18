db.createUser({
  user: 'webuser',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'website',
    },
  ],
})