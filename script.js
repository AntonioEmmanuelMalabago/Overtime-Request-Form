function drawImage() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const nameInput = document.getElementById('name')
  const jobTitleInput = document.getElementById('jobTitle')
  const employeeIdInput = document.getElementById('employeeId')
  const supervisorInput = document.getElementById('supervisor')
  const departmentInput = document.querySelector(
    'input[name="division"]:checked'
  )
  const rateInput = document.getElementById('rate')
  const startDateInput = document.getElementById('startDate')
  const endDateInput = document.getElementById('endDate')
  const startTimeInput = document.getElementById('startTime')
  const endTimeInput = document.getElementById('endTime')
  const explanationInput = document.getElementById('explanation')

  const image = new Image()
  image.src = './Overtime-Req-Form.jpeg'
  image.crossOrigin = 'anonymous'

  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    canvas.width = 700
    canvas.height = 900

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    document.fonts.load('12px "Poppins"').then(() => {
      ctx.font = '12px Poppins'
      ctx.fillStyle = 'black'
      ctx.fillText(nameInput.value, 45, 130)
      ctx.fillText(jobTitleInput.value, 205, 130)
      ctx.fillText(employeeIdInput.value, 405, 130)
      ctx.fillText(getCurrentDate(), 515, 130)
      ctx.fillText(supervisorInput.value, 45, 175)
      ctx.fillText(departmentInput.value, 205, 175)
      ctx.fillText(`₱${rateInput.value}`, 515, 175)
      ctx.fillText(formatDate(startDateInput.value), 45, 247)
      ctx.fillText(formatDate(endDateInput.value), 200, 247)
      ctx.fillText(startTimeInput.value, 355, 247)
      ctx.fillText(endTimeInput.value, 508, 247)
      ctx.fillText(
        getOvertimeHours(startTimeInput.value, endTimeInput.value),
        200,
        440
      )

      const lines = splitTextIntoLines(explanationInput.value, 92) // Adjust 30 characters per line as needed
      let y = 495
      lines.forEach((line) => {
        ctx.fillText(line, 45, y)
        y += 15 // Adjust line height as needed
      })
    })
  }
}

function getCurrentDate() {
  const today = new Date()
  const month = (today.getMonth() + 1).toString().padStart(2, '0')
  const day = today.getDate().toString().padStart(2, '0')
  const year = today.getFullYear()
  return `${month}/${day}/${year}`
}

function formatDate(date) {
  const [year, month, day] = date.split('-').map(Number)
  return `${month}/${day}/${year}`
}

function getOvertimeHours(startTime, endTime) {
  const [startHours, startMinutes] = startTime.split(':').map(Number)
  const [endHours, endMinutes] = endTime.split(':').map(Number)

  let totalStartMinutes = startHours * 60 + startMinutes
  let totalEndMinutes = endHours * 60 + endMinutes

  if (totalEndMinutes < totalStartMinutes) {
    totalEndMinutes += 24 * 60
  }

  const totalMinutes = totalEndMinutes - totalStartMinutes

  const anticipatedHours = String(Math.floor(totalMinutes / 60)).padStart(
    2,
    '0'
  )
  const anticipatedMinutes = String(totalMinutes % 60).padStart(2, '0')

  return `${anticipatedHours}:${anticipatedMinutes}`
}

function splitTextIntoLines(text, maxCharactersPerLine) {
  const words = text.split(' ')
  let lines = []
  let currentLine = ''
  words.forEach((word) => {
    if (currentLine.length + word.length <= maxCharactersPerLine) {
      currentLine += (currentLine === '' ? '' : ' ') + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  })
  if (currentLine !== '') {
    lines.push(currentLine)
  }
  return lines
}

function downloadPDF() {
  const canvas = document.getElementById('canvas')
  const imgData = canvas.toDataURL('image/jpeg')
  const { jsPDF } = window.jspdf
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter',
  })

  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()

  const imgProps = pdf.getImageProperties(imgData)
  const imgWidth = pageWidth
  const imgHeight = (imgProps.height * imgWidth) / imgProps.width

  pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'NONE')
  pdf.save(`Overtime-Req-Form_${getCurrentDate()}.pdf`)

  alert(
    'Please print the PDF file on letter-sized bond paper and submit it to your immediate supervisor.'
  )
}

function generateForm() {
  document.getElementById('popup').style.display = 'block'
  drawImage()
}

function editForm() {
  document.getElementById('popup').style.display = 'none'
  drawImage()
}
