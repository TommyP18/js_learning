$(document).ready(() => {
  $('#one').click(() => {
    document.forms.display.value += 1;
  });
  $('#two').click(() => {
    document.forms.display.value += 2;
  });
  $('#three').click(() => {
    document.forms.display.value += 3;
  });
  $('#four').click(() => {
    document.forms.display.value += 4;
  });
  $('#five').click(() => {
    document.forms.display.value += 5;
  });
  $('#six').click(() => {
    document.forms.display.value += 6;
  });
  $('#seven').click(() => {
    document.forms.display.value += 7;
  });
  $('#eight').click(() => {
    document.forms.display.value += 8;
  });
  $('#nine').click(() => {
    document.forms.display.value += 9;
  });
  $('#zero').click(() => {
    document.forms.display.value += 0;
  });
  $('#add').click(() => {
    document.forms.display.value += '+';
  });
  $('#subs').click(() => {
    document.forms.display.value += '-';
  });
  $('#multi').click(() => {
    document.forms.display.value += '*';
  });
  $('#divide').click(() => {
    document.forms.display.value += '/';
  });
  $('#dot').click(() => {
    document.forms.display.value += '.';
  });
  $('#equal').click(() => {
    if (display.value == "") {
      alert("Please enter any numbers to calculate!");
    }else{
      document.forms.display.value =
      eval(document.forms.display.value);
    }
  });
  $('#clear').click(() => {
    document.forms.display.value = "";
  });
})