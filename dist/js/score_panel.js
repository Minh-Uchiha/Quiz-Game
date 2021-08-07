const restart_button = document.querySelector('.score_display .restart')

export function restartScorePanel() {

    restart_button.addEventListener('click', () => {
        location.reload();
    })

}