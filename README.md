# Overtime Request Form

This project demonstrates an Overtime Request Form bullt using HTML, CSS, and JavaScript, allowing employees to input their details and generate a PDF of the filled form.

## Features

- Form with fields for name, job, title, employee ID, supervisor, department, hourly pay rate, date, time, and explanation.
- Generate a PDF of the filled form using jsPDF and canvas element.
- Provide options to edit details and download the generated PDF.

## Prerequisites

- Code editor for rendering HTML, CSS, and JavaScript files.
- [jsPDF](https://github.com/parallax/jsPDF) library for generating PDFs.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AntonioEmmanuelMalabago/overtime-request-form.git
   cd overtime-request-form
   ```

2. Open the `index.html` file in your browser.

### Usage

1. Fill in the required information in the form.
2. Click the "Generate Form" button to generate the form with the filled details.
3. Edit details if necessary by clicking the "Edit Details" button.
4. Download the generated PDF by clicking the "Download PDF" button.

## JavaScipt Functions

- drawImage: Layout the form details onto the canvas.
- getCurrentDate: Returns the current date in MM/DD/YYYY format.
- formatDate: Formats the date from YYYY-MM-DD to MM/DD/YYYY.
- getOvertimeHours: Calculates the overtime hours based on the start and end times.
- splitTextIntoLines: Splits the text into lines of a specified maximum length.
- generateForm: Displays the popup with the generated form.
- editForm: Hides the popup for editing the form details.
- downloadPDF: Downloads the canvas content as a letter-sized PDF.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Acknowledgements

- [jsPDF](https://github.com/parallax/jsPDF) - javaScript library to generate PDFs
- [Google Fonts](https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap) - Poppins font
