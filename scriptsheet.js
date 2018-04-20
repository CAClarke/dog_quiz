
//jquery start 'tag'
$(document).ready(function(){

  //quiz heading
  document.getElementById("heading").innerHTML = "How much do you know about humanities best friend?";

//questions and answers, using index function for correct answers
let quizQuestions = [
  //1
  {question: '1. Are dogs a member of the genus Canis?',
    answers: [
      'Yes',
      'No'],
    correctAnswer: 'Yes',
  },
  //2
  {question: '2. What type of dog are mastiffs, pit bulls and schnauzers?',
    answers: [
      'Working dogs',
      'Guard dogs',
      'Companion dogs'],
    correctAnswer: 'Guard dogs',
  },
  //3
  {question: '3. What is a dogs breed due to?',
    answers: [
      'Selective breeding',
      'Coat colour',
      'Genetic origin'],
    correctAnswer: 'Selective breeding',
  },
  //4
  {question: '4. The slang term for a mongrel or mutt is?',
    answers: [
      'Cross-breed',
      'Runt',
      'Pavement special'],
    correctAnswer: 'Pavement special',
  },
  //5
  {question: '5. Are dogs predators or scavenger?',
    answers: [
      'Both',
      'Predator',
      'Scavenger'],
    correctAnswer: 'Both',
  },
  //6
  {question: '6. Which is not a dog tail shape?',
    answers: [
      'Straight',
      'Sickle',
      'Bent'],
    correctAnswer: 'Bent',
  },
  //7
  {question: '7. Which is not a dog coat type?',
    answers: [
      'Single',
      'Double',
      'Triple'],
    correctAnswer: 'Triple',
  },
  //8
  {question: '8. Can dogs interbreed with wolves?',
    answers: [
      'Yes',
      'No'],
    correctAnswer: 'Yes',
  },
  //9
  {question: '9. Where are a dogs sweat glands located?',
    answers: [
      'Tongue',
      'Nose',
      'Paws'],
    correctAnswer: 'Paws',
  },
  //10
  {question: '10. The average lifespan of a dog is?',
    answers: [
      '10-18 years',
      '5-10 years',
      '10-13 years'],
    correctAnswer: '10-13 years',
  },
  //11
  {question: '11. A dog can hear how many times further than a human?',
    answers: [
      '2',
      '4',
      '6'],
    correctAnswer: '4',
  },
  //12
  {question: '12. An adult dog has how many teeth?',
    answers: [
      '42',
      '38',
      '22'],
    correctAnswer: '42',
  },
  //13
  {question: '13. The tapetum lucidum allows dogs to do what?',
    answers: [
      'Hear higher frequencies',
      'Smell farther',
      'See in the dark'],
    correctAnswer: 'See in the dark',
  },
  //14
  {question: '14. Dogs have how many eyelids?',
    answers: [
      'One',
      'Two',
      'Three'],
    correctAnswer: 'Three',
  },
  //15
  {question: '15. Do dogs see colour?',
    answers: [
      'Yes',
      'No'],
    correctAnswer: 'Yes',
  },
  //16
  {question: '16. Which dog breed has a blue-black tongue?',
    answers: [
      'Poodle',
      'Chow Chow',
      'Shiba'],
    correctAnswer: 'Chow Chow',
  },
  //17
  {question: '17. What was the name of the dog kept by the Greek god Hades?',
    answers: [
      'Elysium',
      'Tartarus',
      'Cerberus'],
    correctAnswer: 'Cerberus',
  },
  //18
  {question: '18. Why is a dog called Duke in Minnesota a good boy?',
    answers: [
      'He is the mayor',
      'He walked the Apalachian trail',
      'He is a guide dog'],
    correctAnswer: 'He is the mayor',
  },
  //19
  {question: '19. Complete this common phrase: Raining ___ and dogs!',
    answers: [
      'Rabbits',
      'Cats',
      'Birds'],
    correctAnswer: 'Cats',
  },
  //20
  {question: '20. Is this an adorable pupper?',
    answers: [
      'Yes',
      'No'],
    correctAnswer: 'Yes',
  }
];

//fxn to display question and options

//loop for questions
let i=0;//counter for each q
  for(question of quizQuestions){
    //loop for the questions
    var indiv_question = question.question;
    var indiv_answer = question.answers;
      $('#questions').append('<h3>' + indiv_question  + '</h3>');

    //loop for answer options
    //give 'name' the value of counter so it recognises each obj separately
      for(option of indiv_answer){
        $('#questions').append('<input type="radio" name="'+i+'" value="'+option+'" >' + option + '</input>');
      }
      i++; //remind counter to add +1 per obj looped
    }


    //event listener for event:submit
    $('#quiz').submit(function(event){
      event.preventDefault()

      //var that collects users chosen answer values
      let userAnswers = $(this).serializeArray();
      console.log(userAnswers);


      let k =0; //loop start
      let score = 0;
      for(object of quizQuestions){
        let input = userAnswers[k].value;
        console.log(userAnswers[k].value);
      //var that collects correct answers from Q&A array
        let correctAnswers = quizQuestions[k].correctAnswer;
      // console.log(quizQuestions[k].correctAnswer);

      //var that compares userAnswers with correctAnswer, gives score

      if(input == correctAnswers){
        score++;
      };

      k++;
      console.log(score)

      }; //closing of loop

      //var that determines number of questions (actually objs in quizQuestions array)
      let numQuestions = quizQuestions.length;
      console.log(quizQuestions.length);

      //comparison and alerts for results
      if(score == 20){
        document.getElementById('results').innerHTML = 'Well done! You scored 20 out of 20';
      }else if(score < 20 && score >= 18){
        document.getElementById('results').innerHTML = 'Great! You scored ' + score + ' out of 20';
      }else if(score < 18 && score >= 15){
        document.getElementById('results').innerHTML = 'You did okay. You scored ' + score + ' out of 20';
      }else if(score < 15 && score >= 11){
        document.getElementById('results').innerHTML = 'You did poorly. You scored ' + score + ' out of 20';
      }else if(score <= 10){
        document.getElementById('results').innerHTML = 'Too bad. You scored ' + score + ' out of 20';
      };

    }); //closing of EventListener


    } ); //jquery end 'tag'
