import {animate, AnimationTriggerMetadata, style, transition, trigger} from "@angular/animations";

export function animateNGIf(time = 0.5, before: any, after: any, name = "inOutAnimation", func = "ease"): AnimationTriggerMetadata {
    return trigger(
        name,
        [
            transition(
                ":enter",
                [
                    style(before),
                    animate(time + 's ' + func, style(after))
                ]
            ),
            transition(
                ":leave",
                [
                    style(after),
                    animate(time + 's ' + func, style(before))
                ]
            )
        ]
    )
}

export function animateNGIf3Steps(time = 0.5, before: any, between: any, after: any, name = "inOutAnimation", func = "ease") {
    return trigger(
        name,
        [
            transition(
                ":enter",
                [
                    style(before),
                    animate(time + 's ' + func, style(between))
                ]
            ),
            transition(
                ":leave",
                [
                    style(between),
                    animate(time + 's ' + func, style(after))
                ]
            )
        ]
    )
}

export function animateNGifOpacity(time = 0.5, name = "inOutAnimation", func = "ease"): AnimationTriggerMetadata {
    return animateNGIf(time, {
        opacity: 0
    }, {
        opacity: 1
    }, name, func)
}
