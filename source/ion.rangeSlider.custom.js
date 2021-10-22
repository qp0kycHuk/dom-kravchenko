$(".-range-slider-").ionRangeSlider({
  hide_min_max: true,
  hide_from_to: true,
  skin: "round",
  extra_classes: 'form-range-slider',
  onChange: showRangeData,
  onStart: showRangeData
});

function showRangeData(data) {
  const input = data.input[0]
  const field = input.closest('.form-field')
  const fromNode = field.querySelector('.form-range-from')
  const toNode = field.querySelector('.form-range-to')
  const fromInput = field.querySelector('.form-range-from-input')
  const toInput = field.querySelector('.form-range-to-input')
  const from = data.from;
  const to = data.to;


  fromNode && (fromNode.innerHTML = from)
  toNode && (toNode.innerHTML = to)

  fromInput && (fromInput.value = from)
  toInput && (toInput.value = to)
}