```javascript
// pages/about.js
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const message = document.getElementById('message');
    if (message) {
      message.textContent = 'This is the About page';
    }
  }, []);

  return (
    <div id="message"></div>
  );
}
```