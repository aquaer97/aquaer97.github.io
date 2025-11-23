const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 4) {
        document.getElementById('thursdayGif').style.display = 'block';
    }
    if (dayOfWeek === 5) {
        document.getElementById('fridayMovie').style.display = 'block';
    }