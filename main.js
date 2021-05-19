let books = [

  {
    bookNumber : 1,
    bookName : "Clean Code: A Handbook of Agile Software Craftsmanship",
    bookAuthor : "Robert C. Martin"
  },
  {
    bookNumber : 2,
    bookName : "Introduction to Algorithms",
    bookAuthor : "Thomas H. Cormen"
  },
  {
    bookNumber : 3,
    bookName : "Structure and Interpretation of Computer Programs (SICP)",
    bookAuthor : "Harold Abelson"
  },
  {
    bookNumber : 4,
    bookName : "The Clean Coder: A Code of Conduct for Professional Programmers",
    bookAuthor : "Robert C. Martin"
  },
  {
    bookNumber : 5,
    bookName : "Code Complete: A Practical Handbook of Software Construction",
    bookAuthor : "Steve McConnell"
  },
  {
    bookNumber : 6,
    bookName : "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookAuthor : "Erich Gamma"
  },
  {
    bookNumber : 7,
    bookName : "The Pragmatic Programmer",
    bookAuthor : "Andrew Hunt"
  },
  {
    bookNumber : 8,
    bookName : "Head First Design Patterns: A Brain-Friendly Guide",
    bookAuthor : "Eric Freeman"
  },
  {
    bookNumber : 9,
    bookName : "Refactoring: Improving the Design of Existing Code",
    bookAuthor : "Martin Fowler"
  },
  {
    bookNumber : 10,
    bookName : "The Art of Computer Programming, Volumes 1-4",
    bookAuthor : "Donald E. Knuth"
  }

];


  document.getElementById("book").innerHTML =  books.map((item) => {

	
	 return `<tr><th scope="row">${item.bookNumber}</th>
      <td>${item.bookName}</td>
      <td>${item.bookAuthor}</td></tr>`;
});