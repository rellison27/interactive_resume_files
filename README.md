# Interactive Resume
Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information Edit

## How do I see this project?
- `$ Git clone https://github.com/rellison27/interactive_resume_files.git`
- Or click the "download zip" option inside of the green button that says "Clone or download"
- If you downloaded the zip file. Unpack the files in the zip folder.

## Here for inspection...?
### js/resumeBuilder.js
Within reumeBuilder I wrote all of that code to work with helper.js.
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

## See the finished product
- After downloading all the files, open index.html in the browser of your choice.
