var rootCSS = document.querySelector(':root');

$(function(){
    $('.settings').hide();
    rootCSS.style.setProperty('--accent-bright', localStorage.getItem('rileyClosBeatsAccentColor'));
})
$('.beat').on('click', function () {
    let audio = document.getElementById('audio');
    let title = $(this).find('h3').text();
    let description = $(this).find('.description').html();
    let price = $(this).find('h4').text();
    let audioSource = $(this).find('.audio-source').text();
    $('#title').text(title);
    $('#description').html(description);
    $('source').attr('src', audioSource);
    audio.load();
    setTimeout(function(){
        audio.play();
    }, 200)
})

$('#settings').on('click', function () {
    $('.settings').toggle();
})

$('.color-button').on('click', function () {
    let color = $(this).data('color');
    rootCSS.style.setProperty('--accent-bright', color);
    localStorage.setItem('rileyClosBeatsAccentColor', color);
})