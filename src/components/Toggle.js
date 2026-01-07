import React from 'react';
import { useState } from 'react';

function Toggle() {
    const [show, setShow] = useState(false);

  return (
    <div>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        {show && <p>Toggle content</p>}
    </div>
  )
}

export default Toggle