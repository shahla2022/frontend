document.addEventListener('DOMContentLoaded', () => {
    const weatherData = [
        { day: 'شنبه', min: 10, max: 20, icon: 'sun' },
        { day: 'یکشنبه', min: 12, max: 22, icon: 'cloud' },
        { day: 'دوشنبه', min: 14, max: 24, icon: 'rain' },
        { day: 'سه‌شنبه', min: 13, max: 23, icon: 'sun' },
        { day: 'چهارشنبه', min: 15, max: 25, icon: 'cloud' },
        { day: 'پنج‌شنبه', min: 16, max: 26, icon: 'rain' },
        { day: 'جمعه', min: 11, max: 21, icon: 'sun' }
    ];

    function convertToPersianNumber(num) {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        return num.toString().split('').map(digit => persianDigits[digit]).join('');
    }

    const weatherInfo = document.getElementById('weather-info');
   
    weatherData.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const icon = document.createElement('img');
        icon.src = `icons/${day.icon}.svg`;
        icon.alt = ``;

        const dayName = document.createElement('strong');
        dayName.textContent = `${day.day}`;

        const minTemp = document.createElement('div');
        minTemp.classList.add('temperature');
        minTemp.textContent = `حداقل ${convertToPersianNumber(day.min)}°`;

        const maxTemp = document.createElement('div');
        maxTemp.classList.add('temperature');
        maxTemp.textContent = `حداکثر ${convertToPersianNumber(day.max)}°`;

        dayDiv.appendChild(icon);
        dayDiv.appendChild(dayName);
        dayDiv.appendChild(minTemp);
        dayDiv.appendChild(maxTemp);

        weatherInfo.appendChild(dayDiv);
    });
});
