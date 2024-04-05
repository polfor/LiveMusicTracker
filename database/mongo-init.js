db.createUser({
  user: "jaygzixst",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "livemusictracker"
    }
  ]
});
