Python 3.8.5 (v3.8.5:580fbb018f, Jul 20 2020, 12:11:27) 
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license()" for more information.
>>> 2 + 2
4
>>> 3 * 10
30
>>> 100 -10
90
>>> 25 / 5
5.0
>>> 10 /3
3.3333333333333335
>>> 10 //3
3
>>> 
>>> print('Mijn naam is Robin Schoenmaker')
Mijn naam is Robin Schoenmaker
>>> naam = 'Robin'
>>> print(naam)
Robin
>>> print(naam.upper())
ROBIN
>>> print(naam[0:2])
Ro
>>> print(naam[::-1])
niboR
>>> leeftijd = 22
>>> print('Hallo ' + naam + ' ben je al ' + str(leeftijd) + ' jaar?')
Hallo Robin ben je al 22 jaar?
>>> leeftijd = leeftijd + 1
>>> leeftijd
23
>>> leeftijd-=1
>>> leeftijd
22
>>> if leeftijd < 18;
SyntaxError: invalid syntax
>>> if leeftijd <18:
	hoelang_tot18jaar = leeftijd - 18
	print('Over ' + str(hoelang_tot18jaar) + ' jaar wordt je 18' )
	elif leeftijd > 18:
		
SyntaxError: invalid syntax
>>> if leeftijd <18:
	hoelang_tot18jaar = leeftijd - 18
	print('Over ' + str(hoelang_tot18jaar) + ' jaar wordt je 18' )
    elif leeftijd > 18:
	    
SyntaxError: unindent does not match any outer indentation level
>>> if leeftijd <18:
	hoelang_tot18jaar = leeftijd - 18
	print('Over ' + str(hoelang_tot18jaar) + ' jaar wordt je 18' )
     elif leeftijd > 18:
	hoelang_al18jaar = leeftijd - 18
	
SyntaxError: unindent does not match any outer indentation level
>>> if leeftijd < 18:
    hoelang_tot18jaar = 18 - leeftijd
    print('Over ' + str(hoelang_tot18jaar) + ' jaar wordt je 18')
elif leeftijd > 18:
    hoelang_al18jaar = leeftijd - 18
    print('Het is alweer ' + str(hoelang_al18jaar) + ' jaar geleden dat je 18 werd ;-)')
else:
    print('Je bent precies ' + str(leeftijd) + ' jaar')

    
Het is alweer 4 jaar geleden dat je 18 werd ;-)
>>> from datetime import datetime
>>> datum - datetime.now()
Traceback (most recent call last):
  File "<pyshell#32>", line 1, in <module>
    datum - datetime.now()
NameError: name 'datum' is not defined
>>> datum = datetime.now()
>>> print(datum)
2020-09-21 20:53:04.663657
>>> datum.strftime( '%A %d %B %Y")
		
SyntaxError: EOL while scanning string literal
>>> datum.strftime( '%A %d %B %Y')
'Monday 21 September 2020'
>>> import locale
>>> locale.setlocale(locale.LC_TIME, 'nl_NL')
'nl_NL'
>>> datum.strftime( '%A %d %B %Y")
		
SyntaxError: EOL while scanning string literal
>>> datum.strftime( '%A %d %B %Y')
'maandag 21 september 2020'
>>> locale.setlocale(locale.LC_TIME, 'it_IT')
'it_IT'
>>> datum.strftime( '%A %d %B %Y')
'Lunedì 21 Settembre 2020'
>>> 