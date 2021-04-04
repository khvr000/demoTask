
import React from 'react';

import ThemeColors from './colors';
import {getRgbaFromHexColor} from "./theme-utils";


const PRIMARY_COLOR_50 = ThemeColors.BLUE_50;
const PRIMARY_COLOR_100 = ThemeColors.BLUE_100;
const PRIMARY_COLOR_300 = ThemeColors.BLUE_300;
const PRIMARY_COLOR_500 = ThemeColors.BLUE_500;
const PRIMARY_COLOR_700 = ThemeColors.BLUE_700;
const PRIMARY_COLOR_900 = ThemeColors.BLUE_900;

const LightTheme = {
    paper: {
        backgroundColor: ThemeColors.WHITE,
        borderColor: ThemeColors.GREY_5,
        shadows: {
            right: {
                default: {
                    boxShadow: `1px 0 2px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                },
                hover: {
                    boxShadow: `20px 0 40px -10px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.075)}`,
                },
            },
            left: {
                default: {
                    boxShadow: `-2px 0 4px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                },
                hover: {
                    boxShadow: `-20px 0 40px -10px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.075)}`,
                },
            },
            bottom: {
                default: {
                    boxShadow: `0 2px 4px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                },
                hover: {
                    boxShadow: `0 20px 40px -10px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.075)}`,
                },
            },
        },
        offset: {
            backgroundColor: ThemeColors.OFF_WHITE,
            borderColor: ThemeColors.GREY_5,
        },
        inverse: {
            backgroundColor: ThemeColors.ONYX,
            offset: {
                backgroundColor: ThemeColors.GREY_1,
            },
        },
    },
    iconButton: {
        round: {
            primary: {
                default: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                hover: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: PRIMARY_COLOR_700,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: PRIMARY_COLOR_100,
                    color: ThemeColors.WHITE,
                },
            },
            flatColored: {
                default: {
                    backgroundColor: ThemeColors.OFF_WHITE,
                    color: PRIMARY_COLOR_500,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: PRIMARY_COLOR_500,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: PRIMARY_COLOR_500,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_50,
                    color: PRIMARY_COLOR_500,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            flat: {
                default: {
                    backgroundColor: ThemeColors.OFF_WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_50,
                    color: PRIMARY_COLOR_500,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            flatPrimary: {
                default: {
                    backgroundColor: ThemeColors.OFF_WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            inverse: {
                default: {
                    backgroundColor: ThemeColors.ONYX,
                    color: ThemeColors.OFF_WHITE,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_1,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_1,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: ThemeColors.ONYX,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_4,
                    color: ThemeColors.GREY_5,
                },
            },
            error: {
                default: {
                    backgroundColor: ThemeColors.RED_500,
                    color: ThemeColors.OFF_WHITE,
                },
                hover: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_4,
                    color: ThemeColors.GREY_5,
                },
            },
        },
        primary: {
            default: {
                backgroundColor: PRIMARY_COLOR_500,
                color: ThemeColors.WHITE,
            },
            hover: {
                backgroundColor: PRIMARY_COLOR_500,
                color: ThemeColors.WHITE,
            },
            focus: {
                backgroundColor: PRIMARY_COLOR_700,
                color: ThemeColors.WHITE,
            },
            active: {
                backgroundColor: PRIMARY_COLOR_500,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: PRIMARY_COLOR_100,
                color: ThemeColors.WHITE,
            },
        },
        flatColored: {
            default: {
                backgroundColor: ThemeColors.OFF_WHITE,
                color: PRIMARY_COLOR_500,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: PRIMARY_COLOR_500,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: PRIMARY_COLOR_500,
            },
            active: {
                backgroundColor: PRIMARY_COLOR_50,
                color: PRIMARY_COLOR_500,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
            },
        },
        flat: {
            default: {
                backgroundColor: ThemeColors.OFF_WHITE,
                color: ThemeColors.GREY_1,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            active: {
                backgroundColor: PRIMARY_COLOR_50,
                color: PRIMARY_COLOR_500,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
            },
        },
        flatPrimary: {
            default: {
                backgroundColor: ThemeColors.OFF_WHITE,
                color: ThemeColors.GREY_1,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            active: {
                backgroundColor: PRIMARY_COLOR_500,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
            },
        },
        inverse: {
            default: {
                backgroundColor: ThemeColors.ONYX,
                color: ThemeColors.OFF_WHITE,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_1,
                color: ThemeColors.WHITE,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_1,
                color: ThemeColors.WHITE,
            },
            active: {
                backgroundColor: ThemeColors.ONYX,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.GREY_5,
            },
        },
        error: {
            default: {
                backgroundColor: ThemeColors.RED_500,
                color: ThemeColors.OFF_WHITE,
            },
            hover: {
                backgroundColor: ThemeColors.RED_700,
                color: ThemeColors.WHITE,
            },
            focus: {
                backgroundColor: ThemeColors.RED_700,
                color: ThemeColors.WHITE,
            },
            active: {
                backgroundColor: ThemeColors.RED_700,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.GREY_5,
            },
        },
        success: {
            default: {
                backgroundColor: ThemeColors.GREEN_500,
                color: ThemeColors.OFF_WHITE,
            },
            hover: {
                backgroundColor: ThemeColors.GREEN_700,
                color: ThemeColors.WHITE,
            },
            focus: {
                backgroundColor: ThemeColors.GREEN_700,
                color: ThemeColors.WHITE,
            },
            active: {
                backgroundColor: ThemeColors.GREEN_700,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.GREY_5,
            },
        },
        flatSuccess: {
            default: {
                backgroundColor: ThemeColors.OFF_WHITE,
                color: ThemeColors.GREY_1,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            active: {
                backgroundColor: ThemeColors.GREEN_500,
                color: ThemeColors.WHITE,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
            },
        },
    },
    textLabel: {
        default: {
            flat: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_50,
                    color: PRIMARY_COLOR_500,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            flatPrimary: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            primary: {
                default: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
                hover: {
                    backgroundColor: PRIMARY_COLOR_700,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: PRIMARY_COLOR_700,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_700,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            success: {
                default: {
                    backgroundColor: ThemeColors.GREEN_500,
                    color: ThemeColors.WHITE,
                },
                hover: {
                    backgroundColor: ThemeColors.GREEN_700,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: ThemeColors.GREEN_700,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: ThemeColors.GREEN_700,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            flatSuccess: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: ThemeColors.GREEN_500,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            error: {
                default: {
                    backgroundColor: ThemeColors.RED_500,
                    color: ThemeColors.WHITE,
                },
                hover: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: ThemeColors.RED_700,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            flatError: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: ThemeColors.RED_500,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
            inverse: {
                default: {
                    backgroundColor: ThemeColors.ONYX,
                    color: ThemeColors.OFF_WHITE,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_1,
                    color: ThemeColors.WHITE,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_1,
                    color: ThemeColors.WHITE,
                },
                active: {
                    backgroundColor: ThemeColors.ONYX,
                    color: ThemeColors.WHITE,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_4,
                    color: ThemeColors.GREY_5,
                },
            },
        },
        outlined: {
            flat: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    borderColor: ThemeColors.GREY_5,
                    boxShadow: `0 0 0 1px ${ThemeColors.GREY_4}`
                },
                hover: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    borderColor: ThemeColors.GREY_4,
                    boxShadow: `0 0 0 1px ${ThemeColors.GREY_2}`
                },
                focus: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    borderColor: ThemeColors.GREY_4,
                    boxShadow: `0 0 0 2px ${ThemeColors.GREY_2}, 0 0 0 5px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`
                },
                active: {
                    backgroundColor: PRIMARY_COLOR_50,
                    color: ThemeColors.GREY_1,
                    borderColor: PRIMARY_COLOR_500,
                    boxShadow: `0 0 0 2px ${PRIMARY_COLOR_500}`
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
            },
        },
    },
    textColor: {
        default: {
            contrast1: ThemeColors.ONYX,
            contrast2: ThemeColors.GREY_1,
            contrast3: ThemeColors.GREY_2,
            contrast4: ThemeColors.GREY_3,
            contrast5: ThemeColors.GREY_4,
            contrast6: ThemeColors.GREY_5,
        },
        success: {
            contrast1: ThemeColors.GREEN_900,
            contrast2: ThemeColors.GREEN_700,
            contrast3: ThemeColors.GREEN_500,
            contrast4: ThemeColors.GREEN_300,
            contrast5: ThemeColors.GREEN_100,
            contrast6: ThemeColors.GREEN_50,
        },
        error: {
            contrast1: ThemeColors.RED_900,
            contrast2: ThemeColors.RED_700,
            contrast3: ThemeColors.RED_500,
            contrast4: ThemeColors.RED_300,
            contrast5: ThemeColors.RED_100,
            contrast6: ThemeColors.RED_50,
        },
        inverse: {
            contrast1: ThemeColors.WHITE,
            contrast2: ThemeColors.GREY_5,
            contrast3: ThemeColors.GREY_4,
            contrast4: ThemeColors.GREY_3,
        },
    },
    textLink: {
        default: {
            color: PRIMARY_COLOR_500,
            hover: {
                color: PRIMARY_COLOR_700,
            },
            focus: {
                color: PRIMARY_COLOR_900,
            },
        },
        hover: {
            color: PRIMARY_COLOR_700,
        },
        focus: {
            color: PRIMARY_COLOR_900,
        },
        flat: {
            color: ThemeColors.GREY_1,
            hover: {
                color: ThemeColors.ONYX,
            },
            focus: {
                color: ThemeColors.ONYX,
            },
        },
        inverse: {
            color: ThemeColors.WHITE,
            hover: {
                color: ThemeColors.GREY_5,
            },
            focus: {
                color: ThemeColors.GREY_5,
            },
        },

    },
    avatarColors: {
        default: {
            backgroundColor: PRIMARY_COLOR_50,
            color: PRIMARY_COLOR_500,
        },
        primary: {
            backgroundColor: PRIMARY_COLOR_500,
            color: ThemeColors.WHITE,
        },
        success: {
            backgroundColor: ThemeColors.GREEN_500,
            color: ThemeColors.WHITE,
        },
        error: {
            backgroundColor: ThemeColors.RED_500,
            color: ThemeColors.WHITE,
        },
        warning: {
            backgroundColor: ThemeColors.YELLOW_500,
            color: ThemeColors.WHITE,
        },
        muted: {
            backgroundColor: ThemeColors.GREY_2,
            color: ThemeColors.WHITE,
        },
        flatDone: {
            backgroundColor: ThemeColors.GREEN_50,
            color: ThemeColors.GREEN_500,
        },
        flatWarning: {
            backgroundColor: ThemeColors.YELLOW_50,
            color: ThemeColors.YELLOW_500,
        },
        flatError: {
            backgroundColor: ThemeColors.RED_50,
            color: ThemeColors.RED_500,
        },
        flatMuted: {
            backgroundColor: ThemeColors.GREY_5,
            active: ThemeColors.GREY_3,
            color: ThemeColors.GREY_2,
        },
    },
    listItem: {
        active: {
            backgroundColor: PRIMARY_COLOR_50,
            color: PRIMARY_COLOR_500,
        },
    },
    dropdown: {
        dropdownTrigger: {
            default: {
                backgroundColor: ThemeColors.WHITE,
                color: ThemeColors.GREY_1,
                borderColor: ThemeColors.GREY_5,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}, 0 0 3px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                placeholder: {
                    color: ThemeColors.GREY_4,
                },
                caret: {
                    color: ThemeColors.GREY_4,
                },
                notch: {
                    backgroundColor: PRIMARY_COLOR_500,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}`,
                }
            },
            focus: {
                backgroundColor: ThemeColors.WHITE,
                color: ThemeColors.GREY_1,
                borderColor: PRIMARY_COLOR_500,
                boxShadow: `0 0 0 2px ${ThemeColors.GREY_2}, 0 0 0 5px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
            },
            active: {
                backgroundColor: ThemeColors.WHITE,
                color: ThemeColors.GREY_1,
                borderColor: PRIMARY_COLOR_500,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_4}`,
                notch: {
                    backgroundColor: PRIMARY_COLOR_500,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}`,
                }
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}, 0 0 3px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
            },
        },
        dropdownMenu: {
            default: {
                backgroundColor: ThemeColors.WHITE,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}, 0 10px 30px -10px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.16)}`,
            },
            dropdownMenuItem: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                },
                hover: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                focus: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_1,
                },
                active: {
                    backgroundColor: ThemeColors.WHITE,
                    color: PRIMARY_COLOR_500,
                },
                disabled: {
                    backgroundColor: ThemeColors.GREY_5,
                    color: ThemeColors.GREY_4,
                },
                divider: {
                    borderColor: ThemeColors.GREY_5,
                },
                header: {
                    color: ThemeColors.GREY_2,
                },
            },
        },
    },
    form: {
        formInput: {
            default: {
                backgroundColor: ThemeColors.WHITE,
                borderColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}, 0 0 3px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                placeholder: {
                    color: ThemeColors.GREY_3,
                },
            },
            focus: {
                backgroundColor: ThemeColors.WHITE,
                borderColor: PRIMARY_COLOR_500,
                color: ThemeColors.GREY_1,
                boxShadow: `0 0 0 2px ${PRIMARY_COLOR_500}, 0 0 0 5px ${getRgbaFromHexColor(PRIMARY_COLOR_500, 0.15)}`,
            },
            error: {
                backgroundColor: ThemeColors.WHITE,
                color: ThemeColors.GREY_1,
                borderColor: ThemeColors.RED_700,
                boxShadow: `0 0 0 2px ${ThemeColors.RED_500}, 0 0 0 5px ${getRgbaFromHexColor(ThemeColors.RED_700, 0.15)}`,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_2,
                borderColor: ThemeColors.GREY_5,
                boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}, 0 0 3px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
            },
        },
        formLabel: {
            default: {
                color: ThemeColors.GREY_2,
            },
        },
        formSelect: {},
    },
    notification: {
        default: {
            container: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.GREY_1,
                    },
                },
            },
            icon: {
                default: {
                    backgroundColor: ThemeColors.ONYX,
                    color: ThemeColors.WHITE,
                },
            },
            closeButton: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_4,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
        info: {
            container: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: PRIMARY_COLOR_700,
                    },
                },
            },
            icon: {
                default: {
                    backgroundColor: PRIMARY_COLOR_500,
                    color: ThemeColors.WHITE,
                },
            },
            closeButton: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_4,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(PRIMARY_COLOR_900, 0.3),
                },
            },
        },
        success: {
            container: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.GREEN_700,
                    },
                },
            },
            icon: {
                default: {
                    backgroundColor: ThemeColors.GREEN_500,
                    color: ThemeColors.WHITE,
                },
            },
            closeButton: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_4,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.GREEN_900, 0.3),
                },
            },
        },
        warning: {
            container: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.YELLOW_700,
                    },
                },
            },
            icon: {
                default: {
                    backgroundColor: ThemeColors.YELLOW_500,
                    color: ThemeColors.WHITE,
                },
            },
            closeButton: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_4,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.YELLOW_900, 0.3),
                },
            },
        },
        error: {
            container: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_1,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.RED_700,
                    },
                },
            },
            icon: {
                default: {
                    backgroundColor: ThemeColors.RED_500,
                    color: ThemeColors.WHITE,
                },
            },
            closeButton: {
                default: {
                    backgroundColor: ThemeColors.WHITE,
                    color: ThemeColors.GREY_4,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.RED_900, 0.3),
                },
            },
        },
    },
    canvas: {
        background:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAK0lEQVQoU2NkIBIwEqmOgQ4KX7/98B/kHFFhARTbMKwmWiEuz9HBM7isBgB/MwgLLoyq0QAAAABJRU5ErkJggg==',
    },
    progressBar: {
        primary: {
            track: {
                backgroundColor: PRIMARY_COLOR_50,
            },
            fulfilled: {
                backgroundColor: PRIMARY_COLOR_500,
            },
            buffer: {
                backgroundColor: PRIMARY_COLOR_300,
            },
        },
        success: {
            track: {
                backgroundColor: ThemeColors.GREEN_50,
            },
            fulfilled: {
                backgroundColor: ThemeColors.GREEN_500,
            },
            buffer: {
                backgroundColor: ThemeColors.GREEN_300,
            },
        },
        warning: {
            track: {
                backgroundColor: ThemeColors.YELLOW_50,
            },
            fulfilled: {
                backgroundColor: ThemeColors.YELLOW_500,
            },
            buffer: {
                backgroundColor: ThemeColors.YELLOW_300,
            },
        },
        muted: {
            track: {
                backgroundColor: ThemeColors.GREY_5,
            },
            fulfilled: {
                backgroundColor: ThemeColors.ONYX,
            },
            buffer: {
                backgroundColor: ThemeColors.GREY_2,
            },
        },
    },
    circularProgressBar: {
        primary: {
            backgroundColor: PRIMARY_COLOR_500,
        },
        success: {
            backgroundColor: ThemeColors.GREEN_500,
        },
        error: {
            backgroundColor: ThemeColors.RED_500,
        },
        default: {
            backgroundColor: ThemeColors.GREY_1,
        },
        inverse: {
            backgroundColor: ThemeColors.WHITE,
        },
    },
    tooltip: {
        default: {
            backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.9),
            color: ThemeColors.WHITE,
        },
    },
    frameSlider: {
        primary: {
            track: {
                backgroundColor: getRgbaFromHexColor(PRIMARY_COLOR_500, 0.1),
            },
            fulfilled: {
                backgroundColor: PRIMARY_COLOR_500,
            },
            queued: {
                backgroundColor: PRIMARY_COLOR_100,
            },
            thumb: {
                backgroundColor: getRgbaFromHexColor(PRIMARY_COLOR_500, 0.3),
            },
        },
        default: {
            track: {
                backgroundColor: ThemeColors.GREY_4,
            },
            fulfilled: {
                backgroundColor: ThemeColors.GREY_2,
            },
            queued: {
                backgroundColor: ThemeColors.GREY_5,
            },
            thumb: {
                backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.2),
            },
        },
    },
    rangeSlider: {
        primary: {
            track: {
                backgroundColor: getRgbaFromHexColor(PRIMARY_COLOR_500, 0.1),
            },
            range: {
                backgroundColor: PRIMARY_COLOR_500,
            },
            queued: {
                backgroundColor: PRIMARY_COLOR_100,
            },
            thumb: {
                backgroundColor: PRIMARY_COLOR_500,
            },
        },
    },
    tabButton: {
        flat: {
            default: {
                backgroundColor: 'transparent',
                color: ThemeColors.GREY_2,
                borderColor: `transparent`,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
                borderColor: `transparent`,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
                borderColor: `transparent`,
            },
            active: {
                backgroundColor: 'transparent',
                color: ThemeColors.ONYX,
                borderColor: ThemeColors.ONYX,
            },
            disabled: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_4,
                borderColor: `transparent`,
            },
        },
    },
    wizardButton: {
        flat: {
            default: {
                backgroundColor: 'transparent',
                color: ThemeColors.GREY_2,
                borderColor: `transparent`,
            },
            hover: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
                borderColor: `transparent`,
            },
            focus: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
                borderColor: `transparent`,
            },
            active: {
                backgroundColor: 'transparent',
                color: PRIMARY_COLOR_500,
                borderColor: PRIMARY_COLOR_500,
            },
        }
    },
    card: {
        default: {
            boxShadow: `0 1px 2px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
        },
        hover: {
            boxShadow: `0 40px 80px -10px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
        },
    },
    buttonGroup: {
        round: {
            default: {
                outlined: {
                    default: {
                        backgroundColor: 'transparent',
                        borderColor: ThemeColors.GREY_5,
                        boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}`,
                    },
                },
            },
        },
        box: {
            default: {
                outlined: {
                    default: {
                        backgroundColor: 'transparent',
                        borderColor: ThemeColors.GREY_5,
                        boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}`,
                    },
                },
            },
        },
        roundedBox: {
            default: {
                outlined: {
                    default: {
                        backgroundColor: 'transparent',
                        borderColor: ThemeColors.GREY_5,
                        boxShadow: `0 0 0 1px ${ThemeColors.GREY_5}`,
                    },
                },
            },
        },
    },
    snackbar: {
        default: {
            container: {
                default: {
                    backgroundColor: ThemeColors.ONYX,
                    // backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.95),
                    color: ThemeColors.WHITE,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.WHITE,
                    },
                },
            },
            closeButton: {
                default: {
                    backgroundColor: 'transparent',
                    color: ThemeColors.OFF_WHITE,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
        info: {
            container: {
                default: {
                    backgroundColor: getRgbaFromHexColor(PRIMARY_COLOR_700, 0.95),
                    color: ThemeColors.WHITE,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.WHITE,
                    },
                },
            },
            closeButton: {
                default: {
                    backgroundColor: 'transparent',
                    color: ThemeColors.OFF_WHITE,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
        success: {
            container: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.GREEN_700, 0.95),
                    color: ThemeColors.WHITE,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.OFF_WHITE,
                    },
                },
            },
            closeButton: {
                default: {
                    backgroundColor: 'transparent',
                    color: ThemeColors.OFF_WHITE,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
        warning: {
            container: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.YELLOW_700, 0.95),
                    color: ThemeColors.WHITE,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.OFF_WHITE,
                    },
                },
            },
            closeButton: {
                default: {
                    backgroundColor: 'transparent',
                    color: ThemeColors.OFF_WHITE,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
        error: {
            container: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.RED_700, 0.95),
                    color: ThemeColors.WHITE,
                    boxShadow: `0 10px 20px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.1)}`,
                    title: {
                        color: ThemeColors.OFF_WHITE,
                    },
                },
            },
            closeButton: {
                default: {
                    backgroundColor: 'transparent',
                    color: ThemeColors.OFF_WHITE,
                },
            },
            progressBar: {
                default: {
                    backgroundColor: getRgbaFromHexColor(ThemeColors.ONYX, 0.3),
                },
            },
        },
    },
    checkbox: {
        default: {
            icon: {
                color: ThemeColors.GREY_3,
            },
            color: ThemeColors.GREY_1,
            hover: {
                icon: {
                    color: ThemeColors.GREY_2,
                },
                color: ThemeColors.GREY_1,
            },
            focus: {
                icon: {
                    color: ThemeColors.GREY_2,
                },
                color: ThemeColors.GREY_1,
            },
            active: {
                icon: {
                    color: PRIMARY_COLOR_500,
                },
                color: ThemeColors.GREY_1,
            },
            disabled: {
                icon: {
                    color: ThemeColors.GREY_5,
                },
                color: ThemeColors.GREY_5,
            },
        },
        success: {
            icon: {
                color: ThemeColors.GREY_2,
            },
            color: ThemeColors.GREY_1,
            hover: {
                icon: {
                    color: ThemeColors.GREY_1,
                },
                color: ThemeColors.GREY_1,
            },
            focus: {
                icon: {
                    color: ThemeColors.GREY_1,
                },
                color: ThemeColors.GREY_1,
            },
            active: {
                icon: {
                    color: ThemeColors.GREEN_500,
                },
                color: ThemeColors.GREY_1,
            },
            disabled: {
                icon: {
                    color: ThemeColors.GREY_5,
                },
                color: ThemeColors.GREY_5,
            },
        },
    },
    tags: {
        backgroundColor: ThemeColors.OFF_WHITE,
        color: ThemeColors.GREY_1,
        click: {
          boxShadow: `0 4px 4px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.2)}`,
        },

        primary: {
            backgroundColor: PRIMARY_COLOR_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: PRIMARY_COLOR_50,
                color: PRIMARY_COLOR_700,
            },
            alt: {
                backgroundColor: PRIMARY_COLOR_300,
                color: ThemeColors.ONYX,
            }
        },
        success: {
            backgroundColor: ThemeColors.GREEN_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.GREEN_50,
                color: ThemeColors.GREEN_700,
            },
            alt: {
                backgroundColor: ThemeColors.GREEN_300,
                color: ThemeColors.ONYX,
            }
        },
        error: {
            backgroundColor: ThemeColors.RED_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.RED_50,
                color: ThemeColors.RED_700,
            },
            alt: {
                backgroundColor: ThemeColors.RED_300,
                color: ThemeColors.ONYX,
            }
        },
        warning: {
            backgroundColor: ThemeColors.YELLOW_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.YELLOW_50,
                color: ThemeColors.YELLOW_700,
            },
            alt: {
                backgroundColor: ThemeColors.YELLOW_300,
                color: ThemeColors.ONYX,
            }
        },
        inverse: {
            backgroundColor: ThemeColors.ONYX,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            alt: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.ONYX,
            }
        }
    },
    cards: {
        default: {
            backgroundColor: 'transparent',
            color: ThemeColors.ONYX,
            boxShadow: `0 0 0 1px ${ThemeColors.OFF_WHITE}`,
            avatarColors: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.ONYX,
                type1: {
                    backgroundColor: ThemeColors.RED_300,
                },
                type2: {
                    backgroundColor: ThemeColors.GREEN_300,
                },
                type3: {
                    backgroundColor: ThemeColors.YELLOW_300,
                },
                type4: {
                    backgroundColor: ThemeColors.BLUE_300,
                },
                type5: {
                    backgroundColor: ThemeColors.GREY_4,
                },
            },
            hover: {
                backgroundColor: 'transparent',
                boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.2)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.15)}`,
                type1: {
                    backgroundColor: ThemeColors.RED_50,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.RED_500, 0.4)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.RED_500, 0.15)}`,
                },
                type2: {
                    backgroundColor: ThemeColors.GREEN_50,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.GREEN_500, 0.4)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.GREEN_500, 0.15)}`,
                },
                type3: {
                    backgroundColor: ThemeColors.YELLOW_50,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.YELLOW_500, 0.4)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.YELLOW_500, 0.15)}`,
                },
                type4: {
                    backgroundColor: ThemeColors.BLUE_50,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.BLUE_500, 0.4)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.BLUE_500, 0.15)}`,
                },
                type5: {
                    backgroundColor: ThemeColors.GREY_5,
                    boxShadow: `0 0 0 3px ${ThemeColors.WHITE}, 0 40px 60px -30px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.2)}, 0 -20px 40px -30px ${getRgbaFromHexColor(ThemeColors.ONYX, 0.15)}`,
                },
            }
        }
    },
    avatar: {
        backgroundColor: ThemeColors.GREY_5,
        color: ThemeColors.GREY_2,
        primary: {
            backgroundColor: PRIMARY_COLOR_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: PRIMARY_COLOR_50,
                color: PRIMARY_COLOR_700,
            },
            alt: {
                backgroundColor: PRIMARY_COLOR_300,
                color: ThemeColors.ONYX,
            }
        },
        success: {
            backgroundColor: ThemeColors.GREEN_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.GREEN_50,
                color: ThemeColors.GREEN_700,
            },
            alt: {
                backgroundColor: ThemeColors.GREEN_300,
                color: ThemeColors.ONYX,
            }
        },
        error: {
            backgroundColor: ThemeColors.RED_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.RED_50,
                color: ThemeColors.RED_700,
            },
            alt: {
                backgroundColor: ThemeColors.RED_300,
                color: ThemeColors.ONYX,
            }
        },
        warning: {
            backgroundColor: ThemeColors.YELLOW_500,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.YELLOW_50,
                color: ThemeColors.YELLOW_700,
            },
            alt: {
                backgroundColor: ThemeColors.YELLOW_300,
                color: ThemeColors.ONYX,
            }
        },
        inverse: {
            backgroundColor: ThemeColors.ONYX,
            color: ThemeColors.WHITE,
            flat: {
                backgroundColor: ThemeColors.GREY_5,
                color: ThemeColors.GREY_1,
            },
            alt: {
                backgroundColor: ThemeColors.GREY_4,
                color: ThemeColors.ONYX,
            }
        },
    },
    table: {
        borderColor: ThemeColors.GREY_5
    },
    columnScroller: {
        backgroundColor: ThemeColors.WHITE,
        column: {
            backgroundColor: ThemeColors.GREY_5,
        },
        scroll: {
            borderColor: PRIMARY_COLOR_500
        }
    },
    gradient: {
        default:{
            baseColor: PRIMARY_COLOR_300,
            secondaryColor: PRIMARY_COLOR_500
        }
    },
    charts:{
        default:{
            bar:{
                backgroundColor: PRIMARY_COLOR_300
            }
        }
    },
    selection:{
      default: {
          color: PRIMARY_COLOR_500,
          backgroundColor: PRIMARY_COLOR_50
      }
    },
    alerts: {
        backgroundColor: ThemeColors.GREY_5,
        info: {
            backgroundColor: ThemeColors.BLUE_50,
        },
        warning: {
            backgroundColor: ThemeColors.YELLOW_50,
        },
        success: {
            backgroundColor: ThemeColors.GREEN_50,
        },
        error: {
            backgroundColor: ThemeColors.RED_50,
        },
    },
    switch: {
        backgroundColor: ThemeColors.GREY_4,
        color: ThemeColors.WHITE,
        active: {
            backgroundColor: ThemeColors.BLUE_500,
            color: ThemeColors.WHITE,
        }
    },
};

export default LightTheme;
