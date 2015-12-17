
//  die persönliche seite hat eine xss sicherheitslücke

//  http://www.aladria.de/index2.php?url=vorstellseite_edit

//  das kannste mal testen mit dem js hier in der console:

akk = [].slice.call(document.querySelectorAll('form table tbody tr td input'));
akk[0].value = '<script>alert("XSS1")</script>';
akk[1].value = '<script>alert("XSS2")</script>';
document.querySelector('form').submit();

//  und dann halt deine seite

//  http://www.aladria.de/index2.php?url=vorstellseite_anzeige&von=2&spieler=Claraydon

//  ja theoretisch kann man mit so einer xss natürlich viele dinge tun wie zb ein script 
//  welches über document.cookie die PHPSESSID holt und sich die über ingame mail sendet
//  oder extern über ein window.open oder ein link oder xhr woanders hin weiterleitet
//  und dann hat man halt eine session geklaut und kann damit wer weiß was alles tun...
//  aber ich glaube die gesammte maxlen der felder name vorname geb reicht dafür nicht aus
//  für nervige alerts aber schon ;)
//  die liste hier benutz ich zum testen:
//  








