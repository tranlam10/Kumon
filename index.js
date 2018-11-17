let score = 0;

function formSubmit() {
    $('.questionForm').submit(function(event) {
        event.preventDefault();

        for (let i = 0; i < QUESTIONS.length; i++) {
            const userAnswer = parseInt($('input[name="' + QUESTIONS[i].number + '"]').val());
            const rightAnswer = QUESTIONS[i].answer;

            console.log(userAnswer);
            console.log(rightAnswer);

            if (userAnswer === rightAnswer) {
                $('input[name="' + QUESTIONS[i].number + '"]').css('color', 'green');
                score++;
            } else {
                $('input[name="' + QUESTIONS[i].number + '"]').css('color', 'red');
            }
        }
        if (score === QUESTIONS.length) {
            $('.score').html(`${score}/${QUESTIONS.length} Perfect!`);
        } else {
            alert("The answers in red are incorrect. Please correct the mistakes and resubmit.");
            $('.score').html(`${score}/${QUESTIONS.length}`);
        }
        score = 0;
    });
}

function createQuestions() {
    for (let i = 0; i < QUESTIONS.length; i++) {
        $('.questionBox').append(`
            <div class="col-sm-4">
                <div class="card">
                    (${QUESTIONS[i].number})
                    <br>
                    <br>
                    <label>
                        ${QUESTIONS[i].first} ${QUESTIONS[i].symbol} ${QUESTIONS[i].second} =
                        <input type="text" name="${QUESTIONS[i].number}" required>
                    </label>
                </div>
            </div>
        `);
    }

    formSubmit();
}

$(createQuestions);