function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    // servers side validation
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
    }

    console.log(name, email.text);
    const newComment = {
        id: new Date().toISOString(),
        email,
        name, 
        text
    }
    res.status(200).json({ message: 'Added Comment' , comment: newComment});

  }

  if (req.method === 'GET') {
    const dummyList = [
        {id: 'c1', name: 'Kani', text: 'A first comment'},
        {id: 'c2', name: 'Perf', text: 'A second comment'},
    ]
    res.status(200).json({ comments: dummyList});

  }
}

export default handler;
