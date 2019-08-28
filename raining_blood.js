/*

AUTHOR: Julian Kosanovic
DATE: 8/17/19
PROJECT: Playground Express: Raining Blood by Slayer
DESCRIPTION: This is intended to be compiled on the Adafruit MakeCode site <https://makecode.adafruit.com> 
			 and the resulting .uf2 file loaded directly onto the Adafruit Playground Express microcontroller. 
			 I want to use it as part of a merchandise display for my band Human Ottoman (humanottoman.com, 
			 Instagram: @humanottoman).

Adafruit rhythmic convention:

Quarter = 16th note
Half = 8th note
Whole = Quarter note
Double = Half note
Breve = Whole note

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONSTANTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Using the following in an array was buggy but I'm still leaving these here for a future project.

const c3 = 131, cs3 = 139, d3 = 147, ds3 = 156, e3 = 165, f3 = 175, fs3 = 185, g3 = 196, gs3 = 208, a3 = 220;
const as3 = 233, b3 = 247, c4 = 262, cs4 = 277, d4 = 294, ds4 = 311, e4 = 330, f4 = 349, fs4 = 370, g4 = 392;
const gs4 = 415, a4 = 440, as4 = 466, b4 = 494, c5 = 523, cs5 = 554, d5 = 587, ds5 = 622, e5 = 659, f5 = 698;
const fs5 = 740, g5 = 784, gs5 = 831, a5 = 880, as5 = 932, b5 = 988;

const black = 0x000000, red = 0xff0000, orange = 0xff7f00, yellow = 0xffff00, green = 0x00ff00;
const cyan = 0x00ffff, blue = 0x0000ff, violet = 0xff00ff, white = 0xffffff;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let i = 0, j = 0, k = 0, b = 0;

// 12 note rhythms: h h h h h h w h h w h h w
let pattern1 = [147, 147, 147, 330, 466, 494, 466, 392, 466, 440, 370, 440, 415]; 
// 12 note rhythms: h h h h h h w h h w h h w
let pattern2 = [147, 147, 147, 494, 622, 659, 622, 523, 622, 587, 494, 587, 554]; 
// 8 note rhythms: h h h h h h h h
let pattern3 = [147, 175, 220, 233, 330, 311, 233, 220];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAIN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

forever(function () {

    // The following are templates for some of the methods in the library provided by the Adafruit
    // MakeCode online IDE found here: <https://makecode.adafruit.com>
    // music.playTone(*pitch*, music.beat(BeatFraction.*note_length*))
    // light.setPixelColor(*led*, *color*)

    for (i = 0; i < 2; i++) { // Play pattern1 twice
        for (j = 0; j < 13; j++) { // Full rhythmic, pitch, and light sequence
            if (j < 6 || (j > 6 && j < 9) || (j > 9 && j < 12)) { 
                // if j <=3, red on all lights
                if (j == 0 || j == 2) {
                    for (k = 0; k < 10; k++) {
                        light.setPixelColor(k, red)
                    }
                }
                music.playTone(pattern1[j], music.beat(BeatFraction.Half))
                // if j <=3, red off all lights
                if (j == 1 || j == 3) {
                    for (k = 0; k < 10; k++) {
                        light.setPixelColor(k, black)
                    }
                }
                // if j = 4, white on 9 & 8, if j = 5, white on 7 & 6
                if (j == 4) {
                    light.setPixelColor(8, white)
                    light.setPixelColor(9, white)
                }
                if (j == 5) {
                    light.setPixelColor(7, white)
                    light.setPixelColor(6, white)
                }
                // if j = 7, white on 0 & 1, if j = 8, white on 2 & 3
                if (j == 7) {
                    light.setPixelColor(0, white)
                    light.setPixelColor(1, white)
                }
                if (j == 8) {
                    light.setPixelColor(2, white)
                    light.setPixelColor(3, white)
                }
                // if j = 10, violet on 4 & 5, if j = 11, violet on 2, 3, 7 & 6
                if (j == 10) {
                    light.setPixelColor(4, violet)
                    light.setPixelColor(5, violet)
                }
                if (j == 11) {
                    light.setPixelColor(2, violet)
                    light.setPixelColor(3, violet)
                    light.setPixelColor(7, violet)
                    light.setPixelColor(6, violet)
                }
            } // Eighth note rhythms and lights
            if (j == 6 || j == 9 || j == 12) {
                b = j
                // if j=6, white on 5
                if (j == 6) {
                    light.setPixelColor(5, white)
                }
                // if j=9, white on 4
                if (j == 9) {
                    light.setPixelColor(4, white)
                }
                // if j = 12, violet on 1, 0, 8 & 9
                if (j == 12) {
                    light.setPixelColor(0, violet)
                    light.setPixelColor(1, violet)
                    light.setPixelColor(8, violet)
                    light.setPixelColor(9, violet)
                }
                music.playTone(pattern1[b], music.beat(BeatFraction.Whole))
            } // Quarter note rhythms and lights
        }
    }
    for (i = 0; i < 2; i++) { // Play pattern2 twice
        for (j = 0; j < 13; j++) { // Full rhythmic, pitch, and light sequence
            if (j < 6 || (j > 6 && j < 9) || (j > 9 && j < 12)) {
                // if j <=3, red on all lights
                if (j == 0 || j == 2) {
                    for (k = 0; k < 10; k++) {
                        light.setPixelColor(k, red)
                    }
                }
                // if j <=3, red off all lights	
                if (j == 1 || j == 3) {
                    for (k = 0; k < 10; k++) {
                        light.setPixelColor(k, black)
                    }
                }
                // if j = 4, cyan on 9 & 8, if j = 5, cyan on 7 & 6	
                if (j == 4) {
                    light.setPixelColor(8, cyan)
                    light.setPixelColor(9, cyan)
                }
                if (j == 5) {
                    light.setPixelColor(7, cyan)
                    light.setPixelColor(6, cyan)
                }
                // if j = 7, cyan on 0 & 1, if j = 8, cyan on 2 & 3
                if (j == 7) {
                    light.setPixelColor(0, cyan)
                    light.setPixelColor(1, cyan)
                }
                if (j == 8) {
                    light.setPixelColor(2, cyan)
                    light.setPixelColor(3, cyan)
                }
                // if j = 10, white on 4 & 5, if j = 11, white on 2, 3, 7 & 6
                if (j == 10) {
                    light.setPixelColor(4, white)
                    light.setPixelColor(5, white)
                }
                if (j == 11) {
                    light.setPixelColor(2, white)
                    light.setPixelColor(3, white)
                    light.setPixelColor(7, white)
                    light.setPixelColor(6, white)
                }
                music.playTone(pattern2[j], music.beat(BeatFraction.Half))
            } // Eighth note rhythms and lights
            if (j == 6 || j == 9 || j == 12) {
                b = j
                // if j=6, cyan on 5
                if (j == 6) {
                    light.setPixelColor(5, cyan)
                }
                // if j=9, cyan on 4
                if (j == 9) {
                    light.setPixelColor(4, cyan)
                }
                // if j = 12, white on 1, 0, 8 & 9
                if (j == 12) {
                    light.setPixelColor(0, white)
                    light.setPixelColor(1, white)
                    light.setPixelColor(8, white)
                    light.setPixelColor(9, white)
                }
                music.playTone(pattern2[b], music.beat(BeatFraction.Whole))
            } // Quarter note rhythms and lights
        }
    }
    for (i = 0; i < 2; i++) { // Play individual notes, pattern3 twice
        for (j = 0; j < 12; j++) { // Full rhythmic, pitch, and light sequence
            // if j % 2 = 0 (even) white on 0,2,4,6,8 and red on 1,3,5,7,9
            if (j % 2 == 0) {
                for (k = 0; k < 10; k++) {
                    if (k % 2 == 0) {
                        light.setPixelColor(k, white)
                    }
                    else {
                        light.setPixelColor(k, red)
                    }
                }
            }
            // if j % 2 = 1 (odd) white on 1,3,5,7,9 and red on 0,2,4,6,8
            if (j % 2 == 1) {
                for (k = 0; k < 10; k++) {
                    if (k % 2 == 0) {
                        light.setPixelColor(k, red)
                    }
                    else {
                        light.setPixelColor(k, white)
                    }
                }
            }
            for (k = 0; k < 2; k++) {
                music.playTone(d3, music.beat(BeatFraction.Quarter))
            }
            music.playTone(d3, music.beat(BeatFraction.Half))
        } // D
        // all leds off
        for (k = 0; k < 10; k++) {
            light.setPixelColor(k, black)
        }
        for (j = 0; j < 8; j++) { // Play pattern3
            music.playTone(pattern3[j], music.beat(BeatFraction.Half))
            // if i = 0, red on j
            if (i == 0) {
                light.setPixelColor(j, red)
            }
            // if i = 1, red on (9-j)
            if (i == 1) {
                b = 9 - j
                light.setPixelColor(b, red)
            }
        }
    }
})