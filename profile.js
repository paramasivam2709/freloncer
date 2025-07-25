
  const profileImage = document.getElementById('profileImage');
  const uploadInput = document.getElementById('uploadInput');

  // Load saved profile image
  const savedImage = localStorage.getItem('profileImage');
  if (savedImage) {
    profileImage.src = savedImage;
  }

  // Handle image upload
  uploadInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
        localStorage.setItem('profileImage', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Delete profile image
  function deleteProfileImage() {
    localStorage.removeItem('profileImage');
    profileImage.src = 'image/profile.png';
  }

