function handleViewMoreOne() {
    $('.controlsOne').append(`
    <button id="viewMoreOne-btn" class="viewMoreOne-btn btn">View More</button>
    `);
    $('.viewMoreOne-btn').on('click', function () {

        $('.viewMoreOne-btn').remove();
        $('.projDescripOne').append(`
        <div class="projDescripOne">
        In the development of the Hockey Quiz App I wanted to test the user's knowledge of some basic hockey
        facts. I used HTML as a container for the structure of the application and CSS for styling the application to
        meet the user's needs on either mobile devices or larger screens. The application uses
        JavaScript to set the questions from a local storage area and grade the user answers in an efficient if/else
        statement. The user gets immediate feedback once the answer is submitted to the grading function.
        </div>
        `)

        $(handleViewLessOne);
    });

}

function handleViewMoreTwo() {
    $('.controlsTwo').append(`
    <button id="viewMoreTwo-btn" class="viewMoreTwo-btn btn">View More</button>
    `);
    $('.viewMoreTwo-btn').on('click', function () {
        $('.viewMoreTwo-btn').remove();
        $('.projDescripTwo').append(`
        <div class="projDescripTwo">
          The idea behind this application was to create a way for users to broaden their taste in metal music or to
          learn about a specific subgenre that they have never really listened to.
          I used HTML as a container for the structure of the application and CSS for styling the application to meet
          the user's needs on either mobile devices or larger screens. The application uses
          JavaScript and jQuery to search for what the user has either pressed or searched for. The user gets immediate
          feedback once the fetch has been complete and displays the results to the user.
          The user recieves information on the genre or band and YouTube videos to watch and listen to.
        </div>
        `)

        $(handleViewLessTwo);
    });

}


function handleViewLessOne() {
    $('.controlsOne').append(`
    <button id="viewLessOne-btn" class="viewLessOne-btn btn">View Less</button>
    `);
    $('.viewLessOne-btn').on('click', function () {
        $('.viewLessOne-btn').remove();
        $('.projDescripOne').empty('');
        $(handleViewMoreOne);

    });

}

function handleViewLessTwo() {
    $('.controlsTwo').append(`
    <button id="viewLessTwo-btn" class="viewLessTwo-btn btn">View Less</button>
    `);
    $('.viewLessTwo-btn').on('click', function () {
        $('.viewLessTwo-btn').remove();
        $('.projDescripTwo').empty('');
        $(handleViewMoreTwo);

    });

}





function handleClick() {
    handleViewMoreOne();
    handleViewMoreTwo();
}

$(handleClick);