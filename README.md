# React Native Viewport Scale function

 This function defines a scaled viewport, meaning it defines all sizes as if the only phone in existence 
 was the iPhone 6 and then multiply the size by a ratio of the difference in size of the actual phone to the iPhone 6.
 
 This allows you to define all your sizes like: `width: vu(30)`.
 
 > Why not use percentages?
 
 Percents would work exactly the same way. It's easy to ask a design team to define layout relative to an iPhone 6 
 (all mock programs I've seen support it) and then your development team can just use the sizes designers give, verbatim. 
 Percent width (vw, rem, other various forms of solving this problem by engineers) all suffer from the same 
 translation problem (that turns into a communication barrier between teams).
 

> How to handle heights?

The same way. Width of your device is exactly vu(375) and the height is vu(667).


> What about landscape mode?

Go play with some big, successful apps on your phone:

Slack: Scale only.  
Inbox (by Google): Scale only with some max widths defined.  
Play Store:  Scale plus it looks like the tab bar has a minor tweak in landscape.  
Twitter: Scale only.  
Facebook: Scale only.  
Messenger: Scale plus a minor tweak on the bottom nav.

Etc. A separate layout for landscape is a waste of development time unless your app really does call for it.
