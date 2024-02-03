import { useRef, useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then(
        (data) => setFeedbackItems(data.feedback),
        // burada feedbackItems state'ini güncelliyoruz. feedbackItems state'ini güncellememizin sebebi, feedback.json dosyasının içeriğini döndüren get request attığımızda, feedback.json dosyasının içeriğini feedbackItems state'ine atıyoruz. bu sebepten feedbackItems state'ini güncellememiz gerekiyor.
      );
  }

  // burada get request attığımızda feedback.json dosyasını okuyup içeriğini döndürüyoruz. bu sebepten fazladan dönmesini istediğim bir veri yok. (method, headers, body vs. yok.)
  // bu sebepten fetch('/api/feedback').then((response) => response.json()) şeklinde bir get request attığımızda feedback.json dosyasının içeriğini döndürüyor.
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label for="email">Your Email Address</label>
          <input type="email" id="email" name="email" ref={emailInputRef} />
        </div>
        <div>
          <label for="feedback">Your Feedback</label>
          <textarea id="feedback" name="feedback" rows={5} ref={feedbackInputRef}></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Get Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
