const quotesParagraph = document.querySelector('.quote-paragraph');
const quoteAuthor = document.querySelector('.quote-author')
const nextButton = document.querySelector('.next');
const quotes = [
    {
        quote: "Appear weak when you are strong, and strong when you are weak",
        author: "Sun Tzu, Art of War"
    },
    {
        quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer defeat. If you know neither the enemy nor yourself, you will succumb in every battle",
        author: "Sun Tzu, Art of War"
    },
    {
        quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.",
        author: "Charlotte Brontë, Jane Eyre"
    },
    {
        quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
        author: "Harper Lee, To Kill a Mockingbird"
    },
    {
        quote: "Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.",
        author: "Ralph Ellison, Invisible Man"
    },
    {
        quote: "You forget what you want to remember, and you remember what you want to forget.",
        author: "Cormac McCarthy, The Road"
    },
    {
        quote: "Nowadays people know the price of everything and the value of nothing.",
        author: "Oscar Wilde, The Picture of Dorian Grey"
    }
];

nextButton.addEventListener('click', changeQuote)

function changeQuote() {

    const random = Math.floor(Math.random() * quotes.length);
    quotesParagraph.textContent = quotes[random].quote
    quoteAuthor.textContent = quotes[random].author
}