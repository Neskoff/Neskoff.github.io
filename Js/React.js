function tick() {
    const element = (
      <div>
        <p>{new Date().toLocaleTimeString()}.</p>
      </div>
    );
    ReactDOM.render(element, document.getElementById('date'));
  }
  
  setInterval(tick, 1000);
  
  