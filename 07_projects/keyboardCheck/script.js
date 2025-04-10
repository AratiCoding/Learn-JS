const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table style="border-collapse: collapse; margin-top: 20px;">
        <tr>
          <th style="border: 1px solid white; padding: 10px;">Key</th>
          <th style="border: 1px solid white; padding: 10px;">KeyCode</th>
          <th style="border: 1px solid white; padding: 10px;">Code</th>
        </tr>
        <tr>
          <td style="border: 1px solid white; padding: 10px;">${e.key === " " ? "Space" : e.key}</td>
          <td style="border: 1px solid white; padding: 10px;">${e.keyCode}</td>
          <td style="border: 1px solid white; padding: 10px;">${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
