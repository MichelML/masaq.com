const Hash = {};

Hash.initListener = (callback) => {
  if (!Hash.isListenerInitialized) {
    Hash.isListenerInitialized = true;
    window.onhashchange = callback; 
  }
}

Hash.setNewHash = (newHash) => {
  window.location.hash = newHash;
}

export default Hash; 


