function showSuccess(message) {
  this.$notify({
    title: 'Successfully',
    type: 'success',
    message,
  });
}

function showConfirm(message) {
  this.$notify({
    title: 'Warning',
    type: 'warning',
    message,
  });
}

function showInfo(message) {
  this.$notify({
    title: 'Info',
    type: 'info',
    message,
  });
}

function showError(message) {
  this.$notify({
    title: 'Error',
    type: 'error',
    message,
  });
}


export {
  showSuccess,
  showConfirm,
  showInfo,
  showError,
}