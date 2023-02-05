window.onload = async function() {
  data.forEach((item) => {
    const faqContent = document.getElementById('faq-content');

    const questionItem = document.createElement('h4');
    questionItem.classList.add('question');
    questionItem.innerHTML = `Q. ${item.question}`;

    const answerItem = document.createElement('p');
    answerItem.classList.add('answer');
    answerItem.classList.add('mb-4');
    answerItem.innerHTML = `Ans: ${item.answer}`;

    faqContent.appendChild(questionItem);
    faqContent.appendChild(answerItem);
  });
}
