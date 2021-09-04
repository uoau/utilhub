// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>


export as namespace sleep;

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = sleep;

declare function sleep(options: {
    time: number,
    name: string
}): Promise<void>

