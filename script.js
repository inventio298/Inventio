document.getElementById('videoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const url = document.getElementById('videoUrl').value;
  const desc = document.getElementById('videoDesc').value;
  const list = document.getElementById('videoList');
  
  const li = document.createElement('li');
  li.innerHTML = '<p><a href="' + url + '" target="_blank">' + url + '</a></p><p>' + desc + '</p>';
  
  list.prepend(li);
  
  document.getElementById('videoForm').reset();
});