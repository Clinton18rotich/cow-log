// FIXED CAMERA FUNCTION - forces device camera
function openCamera(){
    console.log('📷 Opening CAMERA (not gallery)...');
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*';           // Only images for camera
    inp.capture = 'environment';      // Use rear camera
    inp.style.display = 'none';
    document.body.appendChild(inp);
    
    inp.addEventListener('change', async function() {
        const files = inp.files;
        console.log('📸 Camera returned', files.length, 'files');
        if (files.length > 0) {
            for (let f of files) await processFile(f);
            refreshMediaPreview();
            toast('📸 ' + files.length + ' photo(s) captured');
        }
        document.body.removeChild(inp);
    });
    
    // Error handling
    inp.addEventListener('cancel', function() {
        console.log('Camera cancelled');
        document.body.removeChild(inp);
    });
    
    inp.click();
}

// GALLERY - explicitly NO capture attribute
function openGallery(){
    console.log('🖼️ Opening GALLERY...');
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*,video/*';    // Both images and videos
    inp.multiple = true;               // Allow multiple selection
    // NO capture attribute = opens gallery/file picker
    inp.style.display = 'none';
    document.body.appendChild(inp);
    
    inp.addEventListener('change', async function() {
        const files = inp.files;
        console.log('🖼️ Gallery returned', files.length, 'files');
        if (files.length > 0) {
            for (let f of files) await processFile(f);
            refreshMediaPreview();
            toast('🖼️ ' + files.length + ' file(s) added');
        }
        document.body.removeChild(inp);
    });
    
    inp.click();
}
