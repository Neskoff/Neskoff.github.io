function tick() {
    const element = (
      <div>
        <p>{new Date().toLocaleTimeString()}.</p>
      </div>
    );
    ReactDOM.render(element, document.getElementById('clock'));
  }
  
  setInterval(tick, 1000);
  
  