function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid Email address' });
      return;
    }

    console.log(userEmail);
    res.status(201).json({message: 'New user Signed up. Please expect a call'})
  }
}

export default handler;