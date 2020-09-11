$(function () {

  function doCalc() {
    if (inputsAreEmpty()) {
      $resultArea.html('入力されていない入力欄があります');
      return;
    }
    updateResultArea();
  }

  function inputsAreEmpty() {
    if (getNum1Val() === '' || getNum2Val() === '') {
      return true;
    } else {
      return false;
    }
  }

  function updateResultArea() {
    var addend1 = getNum1Val();
    var addend2 = getNum2Val();
    var sum = addend1 + addend2;
    $resultArea.html(addend1 + ' + ' + addend2 + ' = ' + sum);
  }

  function getNum1Val() {
    return $input1.val();
  }

  function getNum2Val() {
    return $input2.val();
  }

  var $input1 = $('#num1');
  var $input2 = $('#num2');
  var $resultArea = $('#result_area');
  var sumBtn = $('#sum_btn');
  sumBtn.on('click', doCalc);

});
