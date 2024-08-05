
document.getElementById('apiForm').addEventListener('submit', async (event) => {
    event.preventDefault(); 
  
    const prompt = document.getElementById('prompt').value;
    const responseElement = document.getElementById('response');
    
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      responseElement.textContent = data.choices[0].message.content; 
    } catch (error) {
      console.error('Error:', error);
      responseElement.textContent = 'An error occurred. Please try again.';
    }
  });
  
