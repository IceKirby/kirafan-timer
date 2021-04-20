# kirafan-timer
Countdown timers for Kirara Fantasia events. View it at https://icekirby.github.io/kirafan-timer/


## Editing events
Each event can be defined as an Object in the `timersData` Array under the `data.js` file.
All event Objects must contain at least two strings: `type` and `title`. Other necessary properties vary according to the event's type.

The following properties are common to all event types:
- `column`: A number from 0 to 2 to indicate which column this event will be put into.
- `priority`: Optional. A number to indicate how high this event should be within the column it belongs to. A higher priority event will display before a lower one.
- `keepAfterFinished`: Optional. A boolean or string to indicate for how long this event should be visible after it finished. If set to `true`, it will show indefinitely. If set to a string with the `1 day, 1 hour, 30 minutes` syntax, it will show for that time after the event's finished.

#### Normal Events
Events that contain only normal timers. Normal timers are those that display a title, a starting and ending date and a progress bar.

To define a normal event, set its `type` to one of the following values:
- **Maintenance**: For scheduled game maintenances. Gets an orange header.
- **Event**: For in-game events. Gets a pink header.
- **Gacha**: For gacha banners. Gets a green header.
- **Mission**: For special missions. Gets a purple header.
- **Other**: For other types of events. Gets a purple header.

Normal Events can have the following properties:
- `title`: An array of strings to describe the events. First line will be highlighted as the header. Recommended at most 4 lines.
- `image`: Optional. A string indicating an url to an image file to be used as the event's thumbnails.
- `timers`: An array of Timers objects.

Normal Timers cam have the following properties:
- `name`: The timer's title.
- `start`: A string with the `August 3 2018, 18:00` format indicating when the event starts.
- `end`: A string with the `August 3 2018, 18:00` format indicating when the event ends.
- `info`: Optional. A string that will be displayed as a tooltip after the name.
- `markers`: Optional. An object listing markers to be added to the progress bar. Keys will be used as a label for the marker, and the value must be a string with the `August 3 2018, 18:00` defining the marker's time.
- `keepAfterFinished`: Optional. Similar to an event's keepAfterFinished, but specific to a timer. Using this property on individual timers is preferred over using them on the Event level.
- `extraPriority`: Optional. A number that will be added to the event's priority while this timer is active.

#### Login Days Events
Events that occur on a list of specific days.
To define a Login Days event, set its `type` to `"LoginDays"`.

Login Days Events can have the following properties:
- `title`: An array of strings to describe the events. First line will be highlighted as the header. Recommended at most 4 lines.
- `image`: Optional. A string indicating an url to an image file to be used as the event's thumbnails.
- `timers`: An array of Timers objects.

Login Days timers are simpler than normal timers. They only need the following properties:
- `name`: A string to be displayed as a tooltip when hovering over the specific date.
- `date`: A string with the `August 3 2018` format indicating when the event occurs. No time is automatically set to starting at 0:00 and ending 23:59 Japan time.
- `days`: Optional. A number that defines for how many days this timer will run. Defaults to 1.

Individual Login Days timers don't disappear after finished, so `keepAfterFinished` is not used here.

#### Weekend Boss Events
Events that happen every weekend of the month.
To define a Weekend Boss event, set its `type` to `"WeekendBoss"`.

Weekend Boss Events can have the following properties:
- `title`: An array of strings to describe the events. First line will be highlighted as the header. Recommended at most 4 lines.
- `image`: Optional. A string indicating an url to an image file to be used as the event's thumbnails.
- `timers`: An array of Timers objects.

Weekend Boss timers are a mix of Normal and Login Days timers. They can have the following properties:
- `name`: A string to be displayed as a tooltip when hovering over the specific date.
- `start`: A string with the `August 3 2018, 0:00` format indicating when the event starts.
- `end`: A string with the `August 3 2018, 23:59` format indicating when the event ends.
- `type`: A string that can be set to `"normal"` on a single timer within this event. That timer will be work as a Normal Timer instead of a Weekend timer, thus accepting all the properties a Normal Timer can use.

Weekend Boss timers don't disappear after finished, so `keepAfterFinished` is not used here.

#### Daily Quest Events
A special type of fixed event that display the current Day of the Week quest. Most likely this will rarely need any modification.
To define a Daily Quest event, set its `type` to `"DailyQuest"`.

Daily Quest events can have the following property:
- `days`: An object with information about each day's quest. It must contains objects with a key named after the days of the week.

Each object under `days` must have the following properties:
- `elements`: An array of strings with the names for that day's elements. Names can be an element (Fire, Water, Earth, Wind, Sun, Moon), Gold or a class (Warrior, Priest, Mage, Knight, Alchemist).
- `short`: A string with the shorter name for the day (e.g.: Tue for Tuesday).


## URL Query Strings
You can customize the page's view by using Query Strings in the URL. Example:
`https://icekirby.github.io/kirafan-timer/?tz=local&header=false&type=event,gacha`  
The URL above will load the page already in Local Timezone mode, won't display the header and will only show Event and Gacha type timers.

#### Query Parameters
- `tz`: Defines which timezone mode the timer will display. Can be `japan` (default) or `local`.
- `header`: Defines whether the header (title, timezone buttons, contact link, etc) will be displayed or not. Can be `true` (default) or `false`.
- `columns`: Defines the maximum number of columns used to display the timers. Can be `1`, `2` or `3` (default).
- `type`: Shows only timers with the types listed. Multiple types can be listed, separated by comma. Example: `type=dailyquest,event`.
- `title`: Shows only timers that include these words in the title. Multiples terms can be listed, separated by comma. Example: `title=cat,pirate`.
- `id`: Shows only timers with the specific IDs listed. Multiples IDs can be listed, separated by comma. Example: `id=0,2,3`. IDs are defined by order the timer appears in the data.js file, so they aren't guaranteed to remain the same.  

The parameters `type`, `title` and `id` are search parameters, and whenever any of them are used, only timers that meet those criteria will be displayed. They are OR operators, which means a timers only needs to meet one of those conditions to be displayed.
