
export const getUserLocation = (options = {}) => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error),
    options,
  );
});

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const fakeImageUpload = file => new Promise((resolve, reject) => {
  setTimeout(() => resolve({ url: `${uuidv4()}.png` }), 1000);
});
