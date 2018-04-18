$( document ).ready(function() {
    $("#local-time").click(showLocalTime);
    $("#japan-time").click(showJapanTime);
    updateClocks();

    buildData(data);
});

function buildData(data) {
    for (var i = 0; i < data.length; i++) {
        addGroup(data[i]);
    }
    $('[data-toggle="tooltip"]').tooltip();
    setInterval(updateTimers, 12000);
    updateTimers();
}

function updateTimers() {
    updateClocks();

    var bars = $(".timerbar");
    bars.each(updateTimerBar);
}

function updateClocks() {
    $("#japan-time span").text(moment().tz('Asia/Tokyo').format("ddd D MMM, H:mm"));
    $("#local-time span").text(moment().format("ddd D MMM, H:mm"));
}

function updateTimerBar(index, element) {
    var obj = $(this);

    var start = obj.attr("timer-start");
    var end = obj.attr("timer-end");
    var progress = barProgressValue(start, end);

    var barLabel = "0%";
    var startString = "";
    var endString = "";

    if (progress <= 0) {
        barLabel = "Starts in " + remainingTimeString(start, 2);
        startString = "Starts in " + remainingTimeString(start, 5);
        endString = "Ends in " + remainingTimeString(end, 5);
    } else if (progress >= 100) {
        barLabel = "Finished " + remainingTimeString(end, 2) + " ago";
        endString = "Finished " + remainingTimeString(end, 5) + " ago";
        startString = "Started " + remainingTimeString(start, 5) + " ago";
    } else {
        barLabel = "Ends in " + remainingTimeString(end, 2) + " (" + progress.toFixed(1) + "%)";
        endString = "Ends in " + remainingTimeString(end, 5);
        startString = "Started " + remainingTimeString(start, 5) + " ago";
    }

    var badges = obj.find(".badge");
    var startBadge = badges.first();
    var endBadge = badges.last();

    // startBadge.attr("title", startString);
    // endBadge.attr("title", endString);

    startBadge.attr("data-original-title", startString);
    endBadge.attr("data-original-title", endString);

    if (progress > 0 && !startBadge.hasClass("badge-success")) {
        startBadge.removeClass("badge-secondary");
        startBadge.addClass("badge-success");
    }
    if (progress >= 100 && !endBadge.hasClass("badge-danger")) {
        endBadge.removeClass("badge-secondary");
        endBadge.addClass("badge-danger");
    }

    obj.find(".progress span").text(barLabel);
    obj.find(".progress .progress-bar").attr("aria-valuenow", progress).attr("style", "width: " + progress + "%;");
}

function addGroup(info) {
    out = '<div class="col-md-6 col-xl-4">';
    out += createGroup(info);
    out += '</div>';

    $('.row').append(out);
}

function showJapanTime() {
    $(".jp-time").show();
    $(".local-time").hide();
}
function showLocalTime() {
    $(".jp-time").hide();
    $(".local-time").show();
}

function createGroup(info) {
    var out = '<div class="event-group">';

    out += '<div class="topbar top-' + info.type.toLowerCase() + '">';
    out += createThumb(info);
    out += createTitle(info);
    out += '</div>';

    out += '<div class="content">';
    for (var i = 0; i < info.timers.length; i++) {
        out += createTimer(info.timers[i]);
    }
    out += '</div>';

    out += '</div>';

    return out;
}

function createTitle(info) {
    var lines = info.title;
    var out = '<div class="title">';

    for(var i = 0; i < lines.length; i++) {
        out += '<div class="line' + (i == 0 ? " header" : "") + '"><span>' + lines[i] + '</span></div>';
    }
    out += '</div>';
    return out;
}

function createThumb(info) {
    if (info.image) {
        return '<div class="thumb"><img src="' + info.image + '" class="img-fluid"><div class="type"><span>' + cap(info.type) + '</span></div></div>';
    } else {
        return '<div class="thumb"><div class="type"><span>' + cap(info.type) + '</span></div></div>';
    }
}

function createTimer(info) {
    var out = '<div class="timer">';

    out += '<div class="label"><span>' + info.name;
        if (info.info) {
            out += ' <span class="info-icon" data-toggle="tooltip" data-placement="top" title="'+info.info+'">(?)</span>';
        }
    out += '</span></div>';

    out += '<div class="counters">';
        out += '<div class="absolute">';
            var localZone = moment.tz.guess();
            var target = moment.tz(info.start, "MMM D YYYY, H:mm", "Asia/Tokyo").tz(localZone);

            out += '<div class="jp-time starts">'+ moment(info.start, "MMM D YYYY, H:mm").format("ddd, MMM Do, H:mm") +'</div>';
            out += '<div class="local-time starts">'+ target.format("ddd, MMM Do, H:mm") +'</div>';

            target = moment.tz(info.end, "MMM D YYYY, H:mm", "Asia/Tokyo").tz(localZone);
            out += '<div class="jp-time ends">'+ moment(info.end, "MMM D YYYY, H:mm").format("ddd, MMM Do, H:mm") +'</div>';
            out += '<div class="local-time ends">'+ target.format("ddd, MMM Do, H:mm") +'</div>';
        out += '</div>';

        out += '<div class="bar timerbar" timer-start="'+ info.start +'" timer-end="'+ info.end +'">';
            out += '<span class="badge badge-pill badge-secondary" data-toggle="tooltip" data-placement="top" title="">Start</span>';
            out += '<div class="progress position-relative">';
                out += '<div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>';
                out += '<span>0%</span>';
            out += '</div>';
            out += '<span class="badge badge-pill badge-secondary" data-toggle="tooltip" data-placement="top" title="">End</span>';
        out += '</div>';

        out += '</div>';
    out += '</div>';
    return out;
}

function barProgressValue(start, end) {
    var now = moment.tz("Asia/Tokyo")._d.getTime();
    var startTime = moment.tz(start, "MMM D YYYY, H:mm", "Asia/Tokyo")._d.getTime();
    var endTime = moment.tz(end, "MMM D YYYY, H:mm", "Asia/Tokyo")._d.getTime();

    var duration = endTime - startTime;
    var elapsed = now - startTime;

    if (elapsed <= 0) {
        return 0;
    } else if (elapsed >= duration) {
        return 100;
    } else {
        return elapsed / duration * 100;
    }
}

function remainingTimeString(time, steps) {
    var now = moment.tz("Asia/Tokyo");
    var target = moment.tz(time, "MMM D YYYY, H:mm", "Asia/Tokyo");
    var diff = target.diff(now);

    if (diff >= 0) {
        return timeDescription(diff, steps||2);
    } else {
        return timeDescription(-diff, steps||2);
    }
}

function timeDescription(time, steps) {
    var sec = time / 1000;

    var s = [];
    var n;
    var d = [[24*60*60, "day"], [60*60, "hour"], [60, "minute"], [1, "second"]];
    for (var j = 0; j < 4; ++j) {
        n = parseInt(sec / d[j][0], 10);
        if (n > 0) {
            s.push((n + " " + d[j][1] + (n > 1 ? "s" : "")));
            sec -= n * d[j][0];
        }
    }
    return s.splice(0, steps).join(", ");
}

function cap(str) {
    return str[0].toUpperCase() + str.substr(1);
}
