/**
 * 
 */

import { getMonth, MONTHS } from "./index"

describe("Date helper",
    () => {
        describe("When getMonth is called",
            () => {
                it.each(
                    [
                        ["janvier", "2022-01-01"],
                        ["février", "2022-02-01"],
                        ["mars", "2022-03-01"],
                        ["avril", "2022-04-01"],
                        ["mai", "2022-05-01"],
                        ["juin", "2022-06-01"],
                        ["juillet", "2022-07-01"],
                        ["août", "2022-08-01"],
                        ["septembre", "2022-09-01"],
                        ["octobre", "2022-10-01"],
                        ["novembre", "2022-11-01"],
                        ["décembre", "2022-12-01"],
                    ]
                )(`the function return %s for %i as date`, (input, date) => {
                    expect(getMonth(new Date(date))).toBe(input);
                })
            
            }
        )
    }
)