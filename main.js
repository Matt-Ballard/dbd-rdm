const survivorPerks = 
{
    "Ace_In_The_Hole": {
        "categories": [
            "support"
        ],
        "name": "Ace in the Hole",
        "description": "Lady Luck always seems to be throwing something good your way.<br><br>When retrieving an item from a chest, there is a {0}% chance that a Very Rare (or lower) add-on will be attached to it.<br><br>{1}% chance of finding an add-on of Uncommon rarity (or lower).<br><br>When escaping, keep any add-ons your item has.",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "100"
            ],
            [
                "10",
                "25",
                "50"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC3/iconPerks_aceInTheHole.png"
    },
    "Adrenaline": {
        "categories": [
            "navigation",
            "adaptation"
        ],
        "name": "Adrenaline",
        "description": "You are fuelled by unexpected energy when on the verge of escape.<br><br>This perk activates when the exit gates are powered.<br><br>Instantly heal one health state if you are injured or in the dying state and sprint at {0}% of your normal running speed for {1} seconds.<br><br>Adrenaline ignores the Exhausted status effect. Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_adrenaline.png"
    },
    "Aftercare": {
        "categories": [
            "perception"
        ],
        "name": "Aftercare",
        "description": "Unlocks potential in one's aura reading ability.<br><br>You see the aura of every Survivor that:<br><br><li>You rescue from a hook, or rescues you from a hook;</li><li>You complete a healing action on, or completes a healing action on you.</li><br><br>They also see your aura.<br><br>This occurs for up to {0} Survivors. All effects of <i>Aftercare</i> are reset when you are hooked by The Killer.",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "1",
                "2",
                "3"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Kenya/iconPerks_aftercare.png"
    },
    "Alert": {
        "categories": [
            "perception"
        ],
        "name": "Alert",
        "description": "Your acute senses are on high alert.<br><br>When the Killer performs a break action, the Killer is revealed to you for {0} seconds.",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC4/iconPerks_alert.png"
    },
    "AnyMeansNecessary": {
        "categories": [
            "adaptation"
        ],
        "name": "Any Means Necessary",
        "description": "You stand up for yourself, using whatever\u2019s on hand to gain an advantage.<br><br>You see the auras of dropped Pallets.<li>Press and hold the <i>Active Ability Button 1</i> for {0} seconds while standing beside a dropped pallet to reset it to its upright position.</li>",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "6",
                "5",
                "4"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Sweden/iconPerks_anyMeansNecessary.png"
    },
    "Autodidact": {
        "categories": [
            "safeguard"
        ],
        "name": "Autodidact",
        "description": "You start the trial with a -{1}% progress penalty for Skill Checks to heal other Survivors.<br><br>For every successful Skill Check while healing another Survivor, you receive a token up to a maximum of {0} tokens.<br><br>Each token grants you a +{2}% progress bonus.<br><br>Great Skill Checks cannot be performed while using <i>Autodidact</i>.<li><i>Autodidact</i> is not active when using a Med-kit to heal.</li>",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "15"
            ],
            [
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Haiti/iconPerks_autodidact.png"
    },
    "Babysitter": {
        "categories": [
            "safeguard",
            "concealment"
        ],
        "name": "Babysitter",
        "description": "While you have a reputation for being self-centered, you risk it all to help those in need.<br><br>When you unhook a Survivor, they won\u2019t leave scratch marks or pools of blood, and they gain a {0}% <b>Haste</b> status effect for {1} seconds.<br><br>You see the Killer's aura for {2} seconds.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "10"
            ],
            [
                "20",
                "25",
                "30"
            ],
            [
                "8"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Qatar/iconPerks_babySitter.png"
    },
    "Balanced_Landing": {
        "categories": [
            "navigation"
        ],
        "name": "Balanced Landing",
        "description": "Your agility is incomparable.<br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by {0}% and reduce the volume of grunts from falling by 100%. You start sprinting at {1}% your normal running speed for a maximum of {2} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {3} seconds.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "75"
            ],
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_balancedLanding.png"
    },
    "BetterTogether": {
        "categories": [
            "perception"
        ],
        "name": "Better Together",
        "description": "You seek justice and uncover the truth no matter what obstacle stands in your way.<br><br>The aura of the generator you are currently repairing is revealed to all other Survivors located within {0} meters.<br><br>If The Killer downs a Survivor while you are repairing a generator, you see the aura of all other Survivors for {1} seconds.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "32"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Qatar/iconPerks_betterTogether.png"
    },
    "BloodPact": {
        "categories": [
            "perception",
            "support"
        ],
        "name": "Blood Pact",
        "description": "It\u2019s as if a latent part of yourself has awakened. You feel like you can reach out beyond yourself for assistance.<br><br>When you or the Obsession are injured, you both see each other's auras.<br><br>After completing a healing action on the Obsession, or having the Obsession complete a healing action on you, you both gain a {1}% <b>Haste</b> status effect until no longer within 16 meters of each other.<br><br>Reduces the odds of being the Obsession.<br><br>If you are the Obsession, this perk deactivates.<br><br><i>The Killer can only be obsessed with one Survivor at a time.</i><br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ],
            [
                "5",
                "6",
                "7"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Wales/iconPerks_bloodPact.png"
    },
    "BoilOver": {
        "categories": [
            "adaptation"
        ],
        "name": "Boil Over",
        "description": "You are a battler and do everything to escape a foe's grasp. Your struggling effects on The Killer are increased by {0}%.<br><br>You obscure The Killer's ability to see hook auras within {1} meters.<br><br>You gain {2} % of current wiggling progress when the Killer drops from great heights.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "60",
                "70",
                "80"
            ],
            [
                "16"
            ],
            [
                "33"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Kate/iconPerks_boilOver.png"
    },
    "Bond": {
        "categories": [
            "perception"
        ],
        "name": "Bond",
        "description": "Unlocks potential in one's aura reading ability. Allies' auras are revealed to you when they are within a {0} meter range.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "20",
                "28",
                "36"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_bond.png"
    },
    "BorrowedTime": {
        "categories": [
            "safeguard"
        ],
        "name": "Borrowed Time",
        "description": "You are fueled by unexpected energy when saving an ally from a hook.<br><br>Survivors you unhook:<br><br><li>Keep their <b>Endurance</b> status effect for an extra {0} seconds.</li><li>Keep their movement speed bonus for an extra 10 seconds.</li><br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/L4D/iconPerks_borrowedTime.png"
    },
    "Botany_Knowledge": {
        "categories": [
            "safeguard"
        ],
        "name": "Botany Knowledge",
        "description": "You transform plants found around the campfire into tinctures that slow down bleeding.<br><br><li><b>Healing speed</b> is increased by {0}%.</li><li><b>Healing item efficiency</b> is reduced by {1}%.</li>",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ],
            [
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_botanyKnowledge.png"
    },
    "Breakdown": {
        "categories": [
            "adaptation"
        ],
        "name": "Breakdown",
        "description": "Any time you are removed from a hook (escaped or saved), the hook breaks and the Killer's aura is shown to you for {0} seconds. A hook broken by this perk takes 180 seconds to respawn.",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Kenya/iconPerks_breakdown.png"
    },
    "Breakout": {
        "categories": [
            "safeguard"
        ],
        "name": "Breakout",
        "description": "You kick into high gear when someone\u2019s in trouble, inspiring them to overcome any obstacle.<br><br>When within {0} meters of a carried Survivor, you gain the <b>Haste</b> status effect, moving at {1}% increased speed. The carried Survivor\u2019s wiggle speed is increased by {2}%.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "5"
            ],
            [
                "5",
                "6",
                "7"
            ],
            [
                "25"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Sweden/iconPerks_breakout.png"
    },
    "BuckleUp": {
        "categories": [
            "perception"
        ],
        "name": "Buckle Up",
        "description": "Unlocks potential in one's aura reading ability. While healing a Survivor in the dying state, you both can see the Killer's aura. When completing healing a Survivor from the dying state to injured, the healed Survivor can break into a sprint at {0}% of their normal running movement speed for {1} seconds and leaves no scratch marks during this time.<br><br>This perk does not cause Exhaustion.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "150"
            ],
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Ash/iconPerks_buckleUp.png"
    },
    "BuiltToLast": {
        "categories": [
            "adaptation"
        ],
        "name": "Built to Last",
        "description": "You know how to get the most out of your tools.<br><br>After hiding inside a locker for {0} seconds with a depleted item in hand, {1}% of its charges are refilled.<br><br>Each use of <i>Built to Last</i> reduces the amounts of charges refilled by {2}%.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "14",
                "13",
                "12"
            ],
            [
                "99"
            ],
            [
                "33"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Yemen/iconPerks_builtToLast.png"
    },
    "Calm_Spirit": {
        "categories": [
            "concealment"
        ],
        "name": "Calm Spirit",
        "description": "Animals seem to trust you as they often stay calm in your presence.<br><br><li>Reduces chances of alerting woodland creatures by 100%.</li><li>Allows you to overcome the urge to scream.</li><li>Allows you to open chests and cleanse/bless Totems silently, but at {0}% reduced speed.</li>",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_calmSpirit.png"
    },
    "Camaraderie": {
        "categories": [
            "adaptation"
        ],
        "name": "Camaraderie",
        "description": "Life has taught you the importance of friendship which has given you strength.<br><br>While you are on the hook in the struggle phase, <i>Camaraderie</i> activates.<br><br>If another Survivor is within {0} meters of you while <i>Camaraderie</i> is activated, the hook timer is paused for {1} seconds.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "16"
            ],
            [
                "26",
                "30",
                "34"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Qatar/iconPerks_camaraderie.png"
    },
    "Dance_with_me": {
        "categories": [
            "concealment"
        ],
        "name": "Dance With Me",
        "description": "When performing a rushed vault or leaving a locker in a sprint, you leave no scratch marks for {0} seconds.<br><br><i>Dance With Me</i> has a cooldown of {1} seconds.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "3"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Kate/iconPerks_danceWithMe.png"
    },
    "Dark_Sense": {
        "categories": [
            "perception"
        ],
        "name": "Dark Sense",
        "description": "Unlocks potential in one's aura reading ability.<br><br>Each time a generator is completed, <i>Dark Sense</i> activates.<br><br>While <i>Dark Sense</i> is active, the Killer entering a 24-meter radius around you reveals their aura for {0} seconds.<br><br>Once the aura's duration expires, <i>Dark Sense</i> deactivates.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "5",
                "7",
                "10"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_darkSense.png"
    },
    "DeadHard": {
        "categories": [
            "navigation",
            "adaptation"
        ],
        "name": "Dead Hard",
        "description": "You can take a beating.<br><br>Dead hard activates after you are unhooked or unhook yourself.<br><br>When injured, tap into your adrenaline bank to avoid incoming damage. Press the <i>Active Ability Button 1</i> while running to gain the Endurance status effect for the next 0.5 seconds.<br><br><li>Causes the <b>Exhausted</b>\u00a0status effect for {0} seconds.</li><li>Dead Hard then deactivates.</li><br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.<br><br>Exhausted prevents survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC5/iconPerks_DeadHard.png"
    },
    "DecisiveStrike": {
        "categories": [
            "adaptation"
        ],
        "name": "Decisive Strike",
        "description": "Stab at your aggressor in an attempt to escape.<br><br>After being unhooked or unhooking yourself, <b>Decisive Strike</b> activates for {0} seconds.<br><br>While active, complete a Skill Check when grabbed by the Killer to escape, stunning them for {1} seconds.<li>Succeeding or failing the Skill Check disables <b>Decisive Strike</b>.</li><li>You become the Obsession after stunning the Killer.</li><li>The perk and its effects are disabled if the exit gates are powered.</li><br><br><b>Increases</b> your chance to be the Obsession.<br><br>Taking any Conspicuous Action will deactivate <b>Decisive Strike</b>.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ],
            [
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC2/iconPerks_decisiveStrike.png"
    },
    "Deja_Vu": {
        "categories": [
            "perception"
        ],
        "name": "Deja Vu",
        "description": "The auras of <b>3 generators</b> which are in close proximity to one another are revealed to you.<br><br>Gain a {0}% repair speed bonus on the revealed generators.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_dejaVu.png"
    },
    "Deliverance": {
        "categories": [
            "adaptation"
        ],
        "name": "Deliverance",
        "description": "After performing a safe hook rescue on another Survivor, <i>Deliverance</i> activates.<br><br>You now have a 100% chance of unhooking yourself during the escape attempt.<br><br>A successful <i>Deliverance</i> from the hook triggers the <b>Broken</b> status effect for {0} seconds.<br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "100",
                "80",
                "60"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Haiti/iconPerks_deliverance.png"
    },
    "DesperateMeasures": {
        "categories": [
            "safeguard"
        ],
        "name": "Desperate Measures",
        "description": "You refuse to fail, even during your darkest hour.<br><br>For each injured, hooked, or dying Survivor, increase the speed of your healing and unhook actions by {0}%.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "10",
                "12",
                "14"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Yemen/iconPerks_desperateMeasures.png"
    },
    "DetectivesHunch": {
        "categories": [
            "perception"
        ],
        "name": "Detective's Hunch",
        "description": "Unlocks potential in one's aura reading ability. When a generator is completed, the auras of generators, chests and Totems within {0} meters are revealed to you for {1} seconds.<br><br>If you are holding a Map that can track objectives, generators, chests and Totems revealed by <i>Detective's Hunch</i> are added to the Map.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "32",
                "48",
                "64"
            ],
            [
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Finland/iconPerks_detectivesHunch.png"
    },
    "Distortion": {
        "categories": [
            "concealment"
        ],
        "name": "Distortion",
        "description": "When your aura would be shown to the Killer, the perk activates.<br><br><i>Distortion</i> starts with {0} token. When your aura would be read, <i>Distortion</i> activates and consumes a token. For the next {1} seconds, your aura and scratch marks will not be shown to The Killer. For each {2} seconds spent in chase, regain <b>1 token</b>, up to {3}.<br><br>This effect cannot trigger while in the dying state.",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "1"
            ],
            [
                "8",
                "10",
                "12"
            ],
            [
                "15"
            ],
            [
                "2"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Kenya/iconPerks_distortion.png"
    },
    "Diversion": {
        "categories": [
            "concealment"
        ],
        "name": "Diversion",
        "description": "Being within the Killer's Terror Radius while not in a chase for {0} seconds\u00a0activates <i>Diversion</i>.<br><br><li>Once <i>Diversion</i> is activated, press the <i>Active Ability Button 1</i> while crouched and motionless to throw a pebble, which creates a distraction for The Killer at a distance of 20 meters.</li><br><br><li>The perk timer resets once the ability has been activated.</li><br><br>The distraction consists of:<br><br><li>A loud noise notification</li><li>Scratch marks</li>",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Haiti/iconPerks_diversion.png"
    },
    "Empathy": {
        "categories": [
            "perception"
        ],
        "name": "Empathy",
        "description": "Unlocks potential in one's aura reading ability. Dying or injured allies' auras are revealed to you when within a {0} meter range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "64",
                "96",
                "128"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_empathy.png"
    },
    "Fixated": {
        "categories": [
            "navigation"
        ],
        "name": "Fixated",
        "description": "When you have a goal in mind, there\u2019s no turning back: better to ask forgiveness than permission.<br><br>You can see your own scratch marks at all times.<br><br>You walk {0}% faster.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "10",
                "15",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Qatar/iconPerks_fixated.png"
    },
    "FlipFlop": {
        "categories": [
            "adaptation"
        ],
        "name": "Flip-Flop",
        "description": "You have an uncanny ability to escape the inevitable.<br><br>While in dying state, {0}% of your recovery progression is converted into wiggle progression when you are picked up by The Killer, up to a maximum of {1}% total wiggle progression.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "50"
            ],
            [
                "40",
                "45",
                "50"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Ash/iconPerks_flipFlop.png"
    },
    "ForThePeople": {
        "categories": [
            "safeguard"
        ],
        "name": "For the People",
        "description": "You risk life and injury for others.<br><br><i>For the People</i> is only active while at full health.<br><br>Press the <i>Active Ability Button 1</i> while healing another Survivor without a Med-kit to instantly heal them from dying to injured, or from injured to healthy.<br><br>You become injured and receive the <b>Broken</b> status effect for {0} seconds.<br><br>You become the Obsession.<br><br>Equipping this perk <b>decreases</b> your chances of being The Killer\u2019s Obsession at the start of the trial.<br><br><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i><br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "80",
                "70",
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_forThePeople.png"
    },
    "HeadOn": {
        "categories": [
            "adaptation"
        ],
        "name": "Head On",
        "description": "When your mind is set, there better be no one standing in your way.<br><br>While standing in a locker, for {0} seconds, <i>Head On</i> activates.<br><br>While <i>Head On</i> is activated, perform a rush action to leave a locker to use <i>Head On</i>. If The Killer is standing within <i>Head On's</i> effective range, The Killer is stunned for {1} seconds.<br><br>Causes the <b>Exhausted</b>\u00a0status effect for {2} seconds.<br><br><i>Head On</i> cannot be used while <b>Exhausted</b>.<br><br>You do not recover from the <b>Exhausted</b> status effect while running.<br><br><i>Head On</i> cannot be used when you have idle crows.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "3"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Mali/iconPerks_headOn.png"
    },
    "Hope": {
        "categories": [
            "navigation"
        ],
        "name": "Hope",
        "description": "The growing odds of a successful escape fill you with hope and give you wings.<br><br>As soon as the exit gates are powered you gain a {0}% <b>Haste</b> status effect.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "5",
                "6",
                "7"
            ],
            [
                "120"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_hope.png"
    },
    "InnerStrength": {
        "categories": [
            "adaptation"
        ],
        "name": "Inner Strength",
        "description": "You look inward and trust your instincts when you feel lost and alone.<br><br>Each time you complete a Totem cleanse action, <i>Inner Strength</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Inner Strength</i> does not activate.<br><br>While\u00a0<i>Inner Strength</i> is active, hiding inside a locker for {0} seconds while injured automatically heals you from injured to healthy.<br><br><i>Inner Strength</i>\u00a0becomes deactivated as soon as it has successfully triggered.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "10",
                "9",
                "8"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Qatar/iconPerks_innerStrength.png"
    },
    "Iron_Will": {
        "categories": [
            "concealment"
        ],
        "name": "Iron Will",
        "description": "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by {0}%. Does not function while <b>Exhausted</b>. Does not inflict <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "80",
                "90",
                "100"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_ironWill.png"
    },
    "Kindred": {
        "categories": [
            "perception"
        ],
        "name": "Kindred",
        "description": "Unlocks potential in one's aura reading ability. While you are on the hook, all Survivor's auras are revealed to all other Survivors. If The Killer is within a {0} meter range, The Killer's aura is revealed to you and all other Survivors.<br><br>While a Survivor other than you is on the hook, all other Survivors\u2019 auras are revealed to you. If The Killer is within a {0} meter range of the hooked Survivor, The Killer's aura is revealed to you.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "8",
                "12",
                "16"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_kindred.png"
    },
    "Leader": {
        "categories": [
            "strategy",
            "support"
        ],
        "name": "Leader",
        "description": "You're able to organize a team to cooperate more efficiently. Increases other Survivors' healing, sabotage, unhooking, cleansing, opening exit gates, and chest unlocking speeds by {0}% when they are within a {1} meter range from you.<br><br>Survivors can only be affected by one Leader effect at a time.<br><br>This effect persists on other Survivors for {2} seconds after leaving the Leader's effective perk range.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "15",
                "20",
                "25"
            ],
            [
                "8"
            ],
            [
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_leader.png"
    },
    "LeftBehind": {
        "categories": [
            "strategy",
            "adaptation"
        ],
        "name": "Left Behind",
        "description": "Unlocks potential in one's aura reading ability.<br><br>If you are the last Survivor remaining in the trial, you can see the aura of the Hatch within a {0} meter range.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "24",
                "28",
                "32"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/L4D/iconPerks_leftBehind.png"
    },
    "Lightweight": {
        "categories": [
            "navigation"
        ],
        "name": "Lightweight",
        "description": "Your running is light and soft, making your tracks harder to follow. Scratch marks stay visible {0} seconds less than normal, and their spacing is inconsistent.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_lightweight.png"
    },
    "Lithe": {
        "categories": [
            "navigation"
        ],
        "name": "Lithe",
        "description": "After performing a <b>rushed</b> vault, break into a sprint at {0}% of your normal running speed for a maximum of {1} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br><i>Lithe</i> cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC4/iconPerks_lithe.png"
    },
    "LuckyBreak": {
        "categories": [
            "concealment"
        ],
        "name": "Lucky Break",
        "description": "You\u2019ve had your share of scrapes and bruises, but luck\u2019s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. While <i>Lucky Break</i> is active, you won\u2019t leave trails of blood or scratch marks for a total of {0} seconds.<br><br>While healthy, for each 1 second spent healing another Survivor, increase <i>Lucky Break</i>'s duration by 1 second. <i>Lucky Break</i>'s duration cannot increase beyond its starting value.",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Sweden/iconPerks_luckyBreak.png"
    },
    "NoMither": {
        "categories": [
            "adaptation",
            "concealment"
        ],
        "name": "No Mither",
        "description": "You are affected by the <b>Broken</b> status effect for the duration of the trial.<br><br>Your thick blood coagulates practically instantly.<li>You don't leave pools of blood.</li><li>Grunts of pain caused by injuries are reduced by {0}% at any time.</li><li>Your recovery speed is increased by {1}% and you can completely recover from the dying state.</li><br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "25",
                "50",
                "75"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC5/iconPerks_NoMither.png"
    },
    "No_One_Left_Behind": {
        "categories": [
            "safeguard"
        ],
        "name": "No One Left Behind",
        "description": "It is inconceivable to leave someone behind. Once the exit gates are powered, you gain the following effects:<br><br><li>{0}%\u00a0additional Bloodpoints for healing and unhooking other Survivors.</li><li>{1}%\u00a0bonus action speed when healing and unhooking other Survivors.</li><li>When unhooking a Survivor, they gain a 7% movement bonus for 10 seconds.</li><li>The auras of all other Survivors are revealed to you.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "50",
                "75",
                "100"
            ],
            [
                "30",
                "40",
                "50"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_noOneLeftBehind.png"
    },
    "ObjectOfObsession": {
        "categories": [
            "perception"
        ],
        "name": "Object of Obsession",
        "description": "A supernatural bond links you to the Killer.<br><br>While your aura is revealed to the Killer, the Killer's aura becomes visible to you and you gain a {0}% bonus to healing, repairing and cleansing speed.<br><br>If you are the Obsession, your aura is revealed to the Killer for 3 seconds once every 30 seconds.<br><br><b>Increases</b> your chances of being the Obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "2",
                "4",
                "6"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC2/iconPerks_objectOfObsession.png"
    },
    "OffTheRecord": {
        "categories": [
            "concealment"
        ],
        "name": "Off the Record",
        "description": "You\u2019ve learned that a quiet approach is sometimes best.<br><br>Once you are unhooked or escape from the hook, <i>Off the Record</i> activates for {0} seconds. This perk and its effects are disabled once the exit gates are powered.<br><br>While <i>Off the Record</i> is active:<li>Your aura will not be shown to The Killer.</li><li>Grunts of pain caused by injuries are reduced by 100%.</li><li>Gain the <b>Endurance</b> status effect.</li><br><br>Endurance prevents a survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "60",
                "70",
                "80"
            ],
            [
                "100"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_offTheRecord.png"
    },
    "Open_Handed": {
        "categories": [
            "support",
            "navigation"
        ],
        "name": "Open-Handed",
        "description": "Strengthens the potential of you and your team's aura reading abilities.<br><br><li>Increases aura reading ranges by {0} meters.</li><li>Survivors may only be affected by one <i>Open-Handed</i> effect at a time.</li>",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "8",
                "12",
                "16"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC3/iconPerks_openHanded.png"
    },
    "Pharmacy": {
        "categories": [
            "adaptation"
        ],
        "name": "Pharmacy",
        "description": "You have a knack for finding medicine. When injured, <i>Pharmacy</i> activates.<br><br>While active:<br><br><li>Unlocking chests is {0}% faster.</li><li>The hearing distance for noises from unlocking chests are reduced by 8 meters.</li><li><i>Pharmacy</i> guarantees an Emergency Med-kit upon completing the interaction.</li><br>",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "40",
                "60",
                "80"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/England/iconPerks_pharmacy.png"
    },
    "Plunderers_Instinct": {
        "categories": [
            "perception"
        ],
        "name": "Plunderer's Instinct",
        "description": "Unlocks potential in one's aura reading ability. The auras of unopened chests and items in the environment are revealed to you when standing within a {0} meter range. Grants a <b>considerably</b> better chance at finding an item of higher rarity from chests.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "16",
                "24",
                "32"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_plunderersInstinct.png"
    },
    "Poised": {
        "categories": [
            "concealment"
        ],
        "name": "Poised",
        "description": "Achieving goals boosts your confidence.<br><br>When first starting repairs on a generator, reveal the Killer's aura for {0} seconds. When a generator is completed, you leave no scratch marks for {1} seconds.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "6"
            ],
            [
                "10",
                "12",
                "14"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Mali/iconPerks_poised.png"
    },
    "Premonition": {
        "categories": [
            "perception"
        ],
        "name": "Premonition",
        "description": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a 45 degree cone within a range of {0} meters. Premonition has a cooldown of {1} seconds each time it activates.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "36"
            ],
            [
                "60",
                "45",
                "30"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_premonition.png"
    },
    "Prove_Thyself": {
        "categories": [
            "strategy",
            "support"
        ],
        "name": "Prove Thyself",
        "description": "For every other Survivor working on a generator within a {0} meter range, gain {1}% repair speed bonus. This same bonus is also applied to all other Survivors within range.<br><br>Survivors can only be affected by one Prove Thyself effect at a time.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "4"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_proveThyself.png"
    },
    "QuickQuiet": {
        "categories": [
            "navigation",
            "concealment"
        ],
        "name": "Quick & Quiet",
        "description": "You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers.<br><br>The vault and hide actions' noise detection and audio range is reduced by {0}%.<br><br>This effect can only trigger once every {1} seconds.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "100"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_quickAndQuiet.png"
    },
    "RedHerring": {
        "categories": [
            "concealment"
        ],
        "name": "Red Herring",
        "description": "You\u2019ve noticed that people pay attention to whatever makes the loudest noise.<br><br>After repairing a generator for at least {0} seconds, it will be highlighted to you with a yellow aura. The generator stays highlighted until it is fully repaired, you repair a new generator, or enter a locker.<br><br>Entering any locker will trigger a loud noise indicator for The Killer at the highlighted generator's location.<br><br><li><i>Red Herring</i> can only be triggered once every {1} seconds.</li>",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_redHerring.png"
    },
    "RepressedAlliance": {
        "categories": [
            "strategy"
        ],
        "name": "Repressed\u00a0Alliance\u00a0",
        "description": "You\u2019re accustomed to being hunted by malicious\u00a0forces, and you\u2019ve begun using it to your advantage.<br><br><i>Repressed Alliance</i>\u00a0activates after repairing generators for a total of {0}\u00a0seconds.<br><br>When repairing a generator while the perk is active, press the <i>Active Ability Button 1</i> to call upon The Entity to block the generator for {1}\u00a0seconds. The perk deactivates.<br><br>This interaction is not available if other Survivors are repairing the generator.<br><br>Affected generators will be revealed by a white aura to all Survivors.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "55",
                "50",
                "45"
            ],
            [
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Wales/iconPerks_repressedAlliance.png"
    },
    "Resilience": {
        "categories": [
            "navigation",
            "safeguard",
            "strategy"
        ],
        "name": "Resilience",
        "description": "You are motivated in dire situations. Grants {0}% additional speed when repairing, sabotaging, healing, unhooking, vaulting, cleansing or blessing a Totem, opening exit gates, and unlocking while injured.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3",
                "6",
                "9"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_resilience.png"
    },
    "S24P01": {
        "categories": [
            "support"
        ],
        "name": "Appraisal",
        "description": "You have a careful eye that notices what many overlook.<br><br>Start the trial with {0} tokens. When a chest has already been opened, consume a token to rummage through it for an item. Rummaging can only be performed once per chest.<br><br>You rummage through chests {1}% faster.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "3"
            ],
            [
                "40",
                "60",
                "80"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Aurora/iconPerks_appraisal.png"
    },
    "S24P02": {
        "categories": [
            "concealment"
        ],
        "name": "Deception",
        "description": "Your\u00a0adventurous lifestyle\u00a0requires\u00a0moments of\u00a0crafty misdirection.<br><br>Interacting with a locker while sprinting will trigger a loud noise notification at your location and cause you to leave no scratch marks for\u00a0{0} seconds.<br><br>You no longer enter lockers while sprinting and while this perk is active.<br><br><i>Deception</i> can only be triggered once every\u00a0{1} seconds.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "3"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Aurora/iconPerks_deception.png"
    },
    "S24P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Power Struggle",
        "description": "You\u2019ve never given up and you\u2019re not about to start now.<br><br>Whenever you are in the dying state, you see the auras of available Pallets.<br><br>While being carried by The Killer, reaching {0}% wiggle progress activates <i>Power Struggle</i>. While <i>Power Struggle</i> is active, you can drop a nearby, standing pallet to stun The Killer.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "25",
                "20",
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Aurora/iconPerks_powerStruggle.png"
    },
    "S25P01": {
        "categories": [
            "strategy"
        ],
        "name": "Fast Track",
        "description": "Sometimes the sacrifice of others is necessary to get ahead.<br><br>Whenever another Survivor is hooked, you gain {0} tokens. You consume all tokens after a great Skill Check on a generator. Each token consumed grants a {1}% bonus progression for great Skill Checks when repairing generators.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "1"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Comet/iconPerks_FastTrack.png"
    },
    "S25P02": {
        "categories": [
            "navigation"
        ],
        "name": "Smash Hit",
        "description": "When your rival makes a mistake, you seize the opportunity.<br><br>After stunning the Killer with a pallet, break into a sprint at {0}% your normal running speed for {1} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br>This perk cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "150"
            ],
            [
                "4"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Comet/iconPerks_SmashHit.png"
    },
    "S25P03": {
        "categories": [
            "concealment"
        ],
        "name": "Self-Preservation",
        "description": "Life's unforgiving. Sometimes it's best to look out for yourself.<br><br>Whenever another Survivor within {0} meters of you gets hit by a basic attack or a special attack, <i>Self-Preservation</i> activates.<br><br>Your scratch marks, pools of blood and grunts of pain are hidden for {1} seconds.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "16"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Comet/iconPerks_Self-Preservation.png"
    },
    "S26P01": {
        "categories": [
            "perception"
        ],
        "name": "Counterforce",
        "description": "You know how to withstand an enemy stronger than you, and it starts with hunting down and knocking out their support.<br><br>You cleanse Totems 20% faster. After cleansing a Totem, you see the aura of the furthest Totem from you for {0} seconds and you gain an additional {1}% stackable speed bonus to cleansing Totems for the remainder of the trial.",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ],
            [
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_Counterforce.png"
    },
    "S26P02": {
        "categories": [
            "adaptation"
        ],
        "name": "Resurgence",
        "description": "You've come back from near impossible odds... and you'll do it again.<br><br>Gain {0}% healing progress instantly after being unhooked or unhooking yourself.",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "50",
                "60",
                "70"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_Resurgence.png"
    },
    "S26P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Blast Mine",
        "description": "When direct combat isn't an option, you still find ways to strike back.<br><br><i>Blast Mine</i> activates after completing a total of {0}% worth of repair progress on generators.<br><br>When standing next to a generator, press the <i>Active Ability Button 2</i> to install a <i>Blast Mine</i> which stays active for {2} seconds.<br><br>Affected generators will be revealed to all Survivors by a yellow aura. Only one <i>Blast Mine</i> can be active on a generator.<br><br><li>When the Killer damages the generator, the <i>Blast Mine</i> explodes, stunning them and blinding anyone nearby.</li><li><i>Blast Mine</i> deactivates when the generator is damaged by the Killer or when the timer expires.</li>",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "40"
            ],
            [
                "3"
            ],
            [
                "100",
                "110",
                "120"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_BlastMine.png"
    },
    "S27P01": {
        "categories": [
            "safeguard"
        ],
        "name": "Bite the Bullet",
        "description": "Pain hurts you as much as anyone, but you'd prefer others don't know that.<br><br>When healing, you and the Survivor you're healing make no noise, including grunts of pain. There is no noise notification on failed healing Skill Checks and healing regresses by only {0}%.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "3",
                "2",
                "1"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_BiteTheBullet.png"
    },
    "S27P02": {
        "categories": [
            "adaptation"
        ],
        "name": "Flashbang",
        "description": "You've adapted to a world in chaos and making what you can from the debris.<br><br>After completing {0}% progress on any generator, <i>Flashbang</i> activates.<br><br>Enter a locker and press the <i>Active Ability Button 1</i> to craft a flash grenade.<br><br><li>1 charge.</li><li>Detonates with a loud bang and flashing light.</li><li>Creates a noise notification.</li><li>Can be used to distract or blind.</li><br><br>You leave the flash grenade behind when escaping the trial.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "50",
                "45",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_Flashbang.png"
    },
    "S27P03": {
        "categories": [
            "perception"
        ],
        "name": "Rookie Spirit",
        "description": "You keep a careful eye on objectives when they're slipping away.<br><br>Complete {0} good or great Skill Checks while repairing generators to activate <i>Rookie Spirit</i> for the remainder of the trial.<br><br>Once active, you can see the aura of regressing generators.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "5",
                "4",
                "3"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_RookieSpirit.png"
    },
    "S28P01": {
        "categories": null,
        "name": "Clairvoyance",
        "description": "There is an intrinsic energy in you that sees beyond your vision.<br><br><i>Clairvoyance</i> activates whenever you cleanse or bless a Totem.<br><br>When empty-handed, hold the <i>Ability Button</i> to unlock your full aura-reading potential. For up to {0} seconds, you see the auras of exit gate switches, generators, hooks, chests and the Hatch within a {1} meter range.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "8",
                "9",
                "10"
            ],
            [
                "64"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Hubble/iconPerks_Clairvoyance.png"
    },
    "S28P02": {
        "categories": null,
        "name": "Boon: Circle of Healing",
        "description": "A boon that offers comfort amidst the terror.<br><br>Press and hold the <i>Ability button 1</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem's range gain a {1}% healing speed bonus to healing others. Med-kits give no bonus to healing in the Boon Totem's range. Injured Survivors have their auras revealed to all other Survivors when inside the Boon Totem\u2019s range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "24"
            ],
            [
                "50",
                "75",
                "100"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Hubble/iconPerks_BoonCircleOfHealing.png"
    },
    "S28P03": {
        "categories": null,
        "name": "Boon: Shadow Step",
        "description": "A boon that conceals the truth.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem\u2019s range will have their scratch marks and auras hidden to the Killer. This effect lingers for {1} seconds after leaving the Boon Totem\u2019s range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "24"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Hubble/iconPerks_BoonShadowStep.png"
    },
    "S29P01": {
        "categories": null,
        "name": "Overcome",
        "description": "You've calculated how much energy you can risk to expend.<br><br>When you are injured, you retain the movement speed bonus for {0} seconds longer.<br><br><i>Overcome</i> causes the <b>Exhausted</b> status effect for {1} seconds.<br><br><i>Overcome</i> cannot be used when <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "2"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_Overcome.png"
    },
    "S29P02": {
        "categories": null,
        "name": "Corrective Action",
        "description": "You quickly analyze problems and correct other's work when they make a mistake.<br><br>You start the trial with {0} token(s) and gain a token, up to a maximum of {1}, for every great Skill Check.<br><br>When a Survivor fails a Normal Skill, 1 token is consumed and their failed Skill Check becomes a good Skill Check. Additionally, their aura is revealed to you for {2} seconds.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "5"
            ],
            [
                "6"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_CorrectiveAction.png"
    },
    "S29P03": {
        "categories": null,
        "name": "Boon: Exponential",
        "description": "When it seems like your number is up, you consider ways to recalculate the odds.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>All Survivors within the Boon Totem's range recover {1}% faster and can completely recover from the dying state.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "24"
            ],
            [
                "90",
                "95",
                "100"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_BoonExponential.png"
    },
    "S30P01": {
        "categories": null,
        "name": "Parental Guidance",
        "description": "You have inherited the ability to hear the dead \u2013 and now, the dead warn you of danger.<br><br>After stunning the Killer by any means, your scratch marks, pools of blood and grunts of pain are hidden for {0} seconds.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "5",
                "6",
                "7"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Kepler/iconPerks_parentalGuidance.png"
    },
    "S30P02": {
        "categories": null,
        "name": "Empathic Connection",
        "description": "Your presence psychically projects itself to those in danger.<br><br>Whenever another Survivor is injured, they can see your aura within a range of {0} meters.<br><br>You heal other Survivors {1}% faster.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "32",
                "64",
                "96"
            ],
            [
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Kepler/iconPerks_empathicConnection.png"
    },
    "S30P03": {
        "categories": null,
        "name": "Boon: Dark Theory",
        "description": "Your obsessive study of the paranormal has given you unprecedented knowledge of other realms and planes of existence.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem\u2019s range gain a {1}% <b>Haste</b> status effect. This effect lingers for {2} seconds after leaving the Boon Totem's range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "24"
            ],
            [
                "2"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Kepler/iconPerks_darkTheory.png"
    },
    "S31P01": {
        "categories": null,
        "name": "Inner Focus",
        "description": "You have honed your ability to see through the haze of the Ravage.<br><br>You can see other Survivors' scratch marks.<br><br>When the Killer causes another Survivor to lose a health state, the Killer's aura is revealed to you for <b>{0} seconds</b>.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Meteor/iconPerks_InnerFocus.png"
    },
    "S31P02": {
        "categories": null,
        "name": "Residual Manifest",
        "description": "A lifetime of chasing the darkness has taught you that the best disinfectant is light.<br><br>After a successful Killer Blind action, the Killer is affected by the <b>Blindness</b> status effect for {0} seconds.<br><br>This perk grants the ability to rummage through an opened chest once per trial and will guarantee a basic Flashlight.<br><br>Blindness prevents the Killer from seeing auras.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Meteor/iconPerks_ResidualManifest.png"
    },
    "S31P03": {
        "categories": null,
        "name": "Overzealous",
        "description": "Fighting back against the Ravage motivates and inspires you.<br><br>After cleansing or blessing a Totem, this perk activates.<br><br>Your generator repair speed is increased by {0}%. This bonus is doubled if you cleanse or bless a Hex totem.<br><br>This perk deactivates when you lose a health state by any means.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Meteor/iconPerks_Overzealous.png"
    },
    "S32P01": {
        "categories": null,
        "name": "Wiretap",
        "description": "You know that the best way to stay one step ahead is to keep tabs on the competition.<br><br><i>Wiretap</i> activates after completing a total of {1}% worth of repair progress on generators.<br><br>When standing next to a generator, press the <i>Active Ability button 2</i> to install a <i>Wiretap</i>, which stays active for {0} seconds.<br><br>Affected generators will be revealed to all Survivors by a yellow aura. Only one <i>Wiretap</i> can be active on a generator.<br><br><li>When the Killer enters within {3} meters of the generator, their aura is revealed to all Survivors.<ul><li><i>Wiretap</i> deactivates when the generator is damaged by the Killer or when the timer expires.</li></ul></li>",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "100",
                "110",
                "120"
            ],
            [
                "40"
            ],
            [
                "3"
            ],
            [
                "14"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Orion/iconPerks_Wiretap.png"
    },
    "S32P02": {
        "categories": null,
        "name": "Reactive Healing",
        "description": "The more the situation becomes compromised, the more determined you become to complete the operation.<br><br>When another Survivor loses a health state in a {1}-meter radius around you while you are injured, instantly increase your healing progression by {0}% of the missing healing progression.",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ],
            [
                "32"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Orion/iconPerks_ReactiveHealing.png"
    },
    "S32P03": {
        "categories": null,
        "name": "Low Profile",
        "description": "You work best alone. When it\u2019s just you and your pursuer, you know how to disappear.<br><br>When you become the last Survivor standing, this perk activates. Hide your scratch marks, pools of blood and grunts of pain caused by injuries for {0} seconds.",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "70",
                "80",
                "90"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Orion/iconPerks_LowProfile.png"
    },
    "S33P01": {
        "categories": null,
        "name": "Better Than New",
        "description": "You are an expert in combat medicine. Patients leave your care reinvigorated.<br><br>Upon completing a healing action on another Survivor, the targeted Survivor gets a {0}% speed boost to healing, opening chests, cleansing and blessing Totems.<br><br>Survivors keep the bonus until they lose a health state.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "12",
                "14",
                "16"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Orion/iconPerks_BetterThanNew.png"
    },
    "S33P02": {
        "categories": null,
        "name": "Reassurance",
        "description": "Your presence helps allies focus, assuaging the panic associated with extreme conditions.<br><br>When within a {2}-meter radius around a hooked Survivor, use the <i>Active Ability Button 2</i> to pause their struggle progression for {0} seconds.<br><br>If they are on the struggle phase, it also pauses the Struggle Skill Checks.<br><br>Reassurance can only be triggered once per survivor per hook instance.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ],
            [
                "40"
            ],
            [
                "6"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Orion/iconPerks_Reassurance.png"
    },
    "S33P03": {
        "categories": null,
        "name": "Hyperfocus",
        "description": "You throw yourself entirely into your tasks and find ways to be more efficient than anyone else.<br><br>After hitting a great Skill Check while repairing or healing, this perk gains {1} token, up to {2} tokens. Each token increases the chance of Skill Check trigger by {3}%, the Skill Check cursor speed by {4}% and the bonus progression for great Skill Checks by {0}% of its base value.<br><br>The perk loses all tokens in case of normal Skill Check successes, Skill Check fails, or if the action is stopped by any means.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "10",
                "20",
                "30"
            ],
            [
                "1"
            ],
            [
                "6"
            ],
            [
                "4"
            ],
            [
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Orion/iconPerks_Hyperfocus.png"
    },
    "S34P01": {
        "categories": null,
        "name": "Potential Energy",
        "description": "Your arcane abilities have adapted to The Entity's Realm after centuries of wandering, granting you unprecedented control over its many devices.<br><br>After working on a generator for {0} uninterrupted seconds, press the <i>Active Ability Button 2</i> to activate this perk. When this perk is active, repairing the generator will charge this perk instead of making the generator progress. For each 1.5% of generator repair, the perk will gain 1 token, up to {1} tokens.<br><br>While this perk has at least one token and you are working on a generator, you can press the <i>Active Ability Button 2</i> to consume all the tokens and instantly make the generator progress by 1% for each token. This perk then deactivates.<br><br>If you lose a health state while this perk has at least {3} token, the perk will lose all tokens and deactivate. Missing a Skill Check will also result in some tokens lost.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "12",
                "10",
                "8"
            ],
            [
                "20"
            ],
            [
                "1"
            ],
            [
                "1"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Quantum/iconPerks_PotentialEnergy.png"
    },
    "S34P02": {
        "categories": null,
        "name": "Fogwise",
        "description": "In your countless years in the fog, you've seen it all, and when you're focused, you can remember most of it, too.<br><br>Hitting a great Skill Check while repairing a generator reveals the Killer's aura to you for {0} seconds.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Quantum/iconPerks_Fogwise.png"
    },
    "S34P03": {
        "categories": null,
        "name": "Quick Gambit",
        "description": "When you have a Killer's attention, you know how to keep it; others can be confident they won't be interrupted any time soon.<br><br>When you are chased by the Killer, see the aura of other Survivors. Any Survivor repairing a generator gains a {0}% repair speed bonus.<br><br>This perk goes on cooldown for {1} seconds when you lose a health state.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Quantum/iconPerks_VittoriosGambit.png"
    },
    "S35P01": {
        "categories": [
            "concealment"
        ],
        "name": "Cut Loose",
        "description": "You get in enough trouble. You know how to get out of it.<br><br>After performing a rushed vault in a chase, this perk activates.<br><br>While this perk is active, your rushed vaults are silent for up to {0} seconds and successfully performing a rushed vault during that time resets the timer.<br><br>This perk goes on cooldown for {1} seconds.\u00a0",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ],
            [
                "45"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Saturn/iconPerks_CutLoose.png"
    },
    "S35P02": {
        "categories": [
            "strategy"
        ],
        "name": "Friendly Competition",
        "description": "You revel in the community spirit of a competition, and inspire others to follow suit.<br><br>Whenever you finish repairing a generator with at least one other Survivor, this perk activates.<br><br>You and other survivors who finished repairing the generator with you get {0}% increased repair progress speed\u00a0for {1} seconds.<br><br><i>Survivors can only have one instance of this perk's ability active at once.</i>",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "5"
            ],
            [
                "45",
                "60",
                "75"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Saturn/iconPerks_FriendlyCompetition.png"
    },
    "S35P03": {
        "categories": [
            "support"
        ],
        "name": "Teamwork: Power of Two",
        "description": "It\u2019s hard to keep up with you, but it doesn\u2019t stop people from trying.<br><br>When you finish healing another Survivor, you both gain {0}%\u00a0<b>Haste</b> as\u00a0long as you stay within {1} meters\u00a0of each other.<br><br>This effect lingers for <b>4</b> seconds when leaving the range.<br><br>This effect does not stack.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "5"
            ],
            [
                "8",
                "12",
                "16"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Saturn/iconPerks_TeamworkPowerOfTwo.png"
    },
    "S36P01": {
        "categories": [
            "navigation"
        ],
        "name": "Background Player",
        "description": "You're not usually the center of attention. In some cases, this can be a good thing.<br><br>When the Killer picks-up another Survivor, <i>Background Player</i> activates for {0} seconds.<br><br>When you start running, break into a sprint at {1}% of your normal Running Movement speed for {2} seconds.<br><br><i>This perk cannot be used while <b>Exhausted</b>.</i><br><br>This perk causes the <b>Exhausted</b> status effect for {3} seconds.\u00a0<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 35,
        "tunables": [
            [
                "10"
            ],
            [
                "150"
            ],
            [
                "5"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Saturn/iconPerks_BackgroundPlayer.png"
    },
    "S36P02": {
        "categories": [
            "strategy"
        ],
        "name": "Blood Rush",
        "description": "Your mind and body are honed for great feats, allowing you to push through with extra effort when necessary.<br><br>After being unhooked, <i>Blood Rush</i> activates for the next {0} seconds.<br><br>While suffering from the <b>Exhausted</b>\u00a0status effect, press the <i>Active Ability Button 1</i> to recover from <b>Exhausted</b>\u00a0instantly.<br><br>This perk deactivates when it is used or when performing a Conspicuous Action.<br><br><i>Blood Rush</i> is disabled once the Exit Gates are powered.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 35,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Saturn/iconPerks_BloodRush.png"
    },
    "S36P03": {
        "categories": [
            "support"
        ],
        "name": "Teamwork: Collective Stealth",
        "description": "When someone helps you out, you respond in kind.<br><br>When another Survivor finishes healing you, you both leave no scratch marks as\u00a0long as you stay within {1} meters\u00a0of each other.<br><br>This effect lingers for <b>4</b> seconds when leaving the range.<br><br>This effect does not stack.",
        "role": "survivor",
        "character": 35,
        "tunables": {
            "1": [
                "8",
                "12",
                "16"
            ]
        },
        "teachable": 40,
        "image": "UI/Icons/Perks/Saturn/iconPerks_TeamworkCollectiveStealth.png"
    },
    "S37P01": {
        "categories": [
            "strategy"
        ],
        "name": "Troubleshooter",
        "description": "No amount of distraction will shake you from your primary task.<br><br>When you are chased by the Killer, <i>Troubleshooter</i> activates.<br><br><li>You see the aura of the Generator with the most progress.</li><li>You see the aura of the Killer for {0} seconds after dropping a Pallet.</li><br><br>The effect lasts for {1} seconds after being in chase, then deactivates.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Umbra/IconPerks_troubleshooter.png"
    },
    "S37P02": {
        "categories": [
            "safeguard"
        ],
        "name": "Made for This",
        "description": "You were born to survive, and raised to adapt.<br><br><i>Made for This</i> activates while you are in the injured state.<br><br><li>After you finish healing another Survivor, gain the <b>Endurance</b> status effect for {1} seconds.</li><li>While affected by <b>Deep Wound</b>, you run {0}% faster.</li><br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "3"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Umbra/IconPerks_madeForThis.png"
    },
    "S37P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Scavenger",
        "description": "Where others see junk, you see valuable improvised tools.<br><br>While you are holding an empty toolbox, <i>Scavenger</i> activates.<br><br>Succeeding a great skill check while repairing gains {0} token, up to {1}.<br><br>When you reach maximum tokens, lose all tokens and automatically recharge your toolbox to full. Then, your generator repair speed is {2}% slower for {3} seconds.<br><br>This perk grants the ability to rummage through an opened chest once per Trial and will guarantee a basic Toolbox.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "1"
            ],
            [
                "5"
            ],
            [
                "50"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Umbra/IconPerks_scavenger.png"
    },
    "S38P01": {
        "categories": null,
        "name": "Dramaturgy",
        "description": "When people bring you on to their project, they do so because of the unexpected magic you bring to your performance.<br><br><i>Dramaturgy</i> activates while you are healthy.<br><br>While running, press the <i>active ability button 2</i> to run with knees high for 0.5 seconds and then gain {0}% <b>Haste</b> for {1} seconds, followed by an unknown effect.<br><br><ul><li>Become <b>Exposed</b> for {2} seconds;</li><li>Gain {3}% <b>Haste</b> for {4} seconds;</li><li>Scream, but nothing happens;</li><li>Gain a random rare item, with random add-ons, and drop any held item.</li></ul><i>The same effect cannot happen twice in a row.</i><br><br><i>Dramaturgy</i> causes <b>Exhausted</b> for {5} seconds. Can't be used while <b>Exhausted</b>.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.<br><br>Haste increases Survivor movement speed.<br><br>Exhausted prevents Survivors from activating other perks that cause Exhausted.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "25"
            ],
            [
                "2"
            ],
            [
                "12"
            ],
            [
                "25"
            ],
            [
                "2"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Venus/iconPerks_Dramaturgy.png"
    },
    "S38P02": {
        "categories": null,
        "name": "Scene Partner",
        "description": "You lock in with your co-star, engaging with and reacting to each other on a higher level.<br><br><i>Scene Partner</i> activates when you are in the Killer's Terror Radius.<br><br>Whenever you look at the Killer, scream, then see the Killer's aura for {0} seconds.<br><br><i>There is a chance you will scream again, if you do, you will see the Killer's aura for an additional 2 seconds.</i><br><br><i>Scene Partner</i> then goes on cooldown for {1} seconds.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "60"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Venus/iconPerks_ScenePartner.png"
    },
    "S38P03": {
        "categories": null,
        "name": "Plot Twist",
        "description": "Big moments are vital, but you know that sometimes an understated read can be just as powerful.<br><br><i>Plot Twist</i> activates when you are injured.<br><br>Press the <i>ability button 2</i> while crouched and motionless to enter the dying state silently.<br><br>When using <i>Plot Twist</i> to enter the dying state: you leave no blood pools and you make no noise and you can fully recover from the dying state.<br><br>When you recover by yourself using <i>Plot Twist</i>, you are healed instantly and you gain {0}% <b>Haste</b> for {1} seconds.<br><br><i>This perk deactivates if you recover by yourself by any means.<br><br>This perk re-activates when the exit gates are powered.</i><br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "50"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Venus/iconPerks_PlotTwist.png"
    },
    "S39P01": {
        "categories": null,
        "name": "Lucky Star",
        "description": "You know how to stay calm in the face of incomprehensible danger.<br><br>When you hide in a locker, you make no grunts of pain.<br><br>After exiting the locker, you see the aura of the closest generator and all Survivors, leave no pools of blood and make no grunts of pain for {0} seconds.<br><br>This perk goes on cooldown for {1} seconds.<br>",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "30"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_LuckyStar.png"
    },
    "S39P02": {
        "categories": null,
        "name": "Chemical Trap",
        "description": "In the Fog, an officer must adapt to the materials at hand.<br><br><i>Chemical Trap</i> activates after completing a total of {0}% worth of progress on generators.<br><br>While standing next to a dropped pallet, press the <i>Active Ability Button 2</i> to install a Trap, which stays active for {1} seconds.<br><br>Affected pallets will be revealed to all Survivors by a yellow aura. Only one <i>Chemical trap</i> can be active on a pallet.<br><br>When the Killer performs the break action on the pallet, the <i>Chemical trap</i> explodes, and they are slowed by {2}% for {3} seconds.<br><br>\u201cHow do we kill it, Ash?\u201d \u2013Ellen Ripley",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "20"
            ],
            [
                "40",
                "50",
                "60"
            ],
            [
                "50"
            ],
            [
                "4"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_ChemicalTrap.png"
    },
    "S39P03": {
        "categories": null,
        "name": "Light-footed",
        "description": "Crossing paths with deadly killers has taught you the value of discretion.<br><br>When you are healthy, this perk activates.<br><br>Your running footsteps are silent.<br><br>This perk goes on cooldown for {0} seconds after performing a rushed action.<br><br>\u201cCome on, cat.\u201d \u2013Ellen Ripley",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "28",
                "24",
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_LightFooted.png"
    },
    "S40P01": {
        "categories": [
            "safeguard"
        ],
        "name": "Champion of Light",
        "description": "The glow of the flashlight looks a little different, feels a little warmer.<br><br>When you are shining a Flashlight, you have {0}% <b>Haste</b>.<br><br>When you successfully blind the Killer, they also gain {1}% <b>Hindered</b> for {2} seconds. This effect cannot stack with itself.<br><br>Then, this perk goes on cooldown for {3} seconds.<br><br>Haste increases Survivor movement speed.<br><br>Hindered reduces Killer movement speed.<br><br>\u201cI squeezed the flashlight like my life depended on it, willing it to stop coming any closer.\u201d \u2013 Departure",
        "role": "survivor",
        "character": 39,
        "tunables": [
            [
                "50"
            ],
            [
                "20"
            ],
            [
                "6"
            ],
            [
                "80",
                "70",
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Zodiac/iconsPerks_ChampionOfLight.png"
    },
    "S40P02": {
        "categories": [
            "strategy"
        ],
        "name": "Boon: Illumination",
        "description": "Your keen insight is something best shared with others.<br><br>Press and hold the <i>Ability Button 1</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Survivors inside your Boon Totem\u2019s range see the aura of all chests and all generators in blue.<br><br>If you have a lit Boon Totem, you cleanse or bless Totems {1}% faster.<br><br>You can only bless one Totem at a time. All equipped Boon perks are active on your Boon Totem.<br><br>\"A shift in reality. Heavy with hidden meanings\" \u2013 Return",
        "role": "survivor",
        "character": 39,
        "tunables": [
            [
                "24"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Zodiac/iconsPerks_Illumination.png"
    },
    "S40P03": {
        "categories": [
            "concealment"
        ],
        "name": "Deadline",
        "description": "Desperation creeps in, and you push yourself to work harder.<br><br>This perk activates when you are injured.<br><br>Skill Checks appear {0}% more frequently when repairing or healing and appear in random places.<br><br>The penalty for missing skill checks is reduced by {1}%.<br><br>\u201cThe night had been one desperate situation after another.\u201d \u2013 Departure",
        "role": "survivor",
        "character": 39,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ],
            [
                "50"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Zodiac/iconsPerks_Deadline.png"
    },
    "S41P01": {
        "categories": null,
        "name": "Invocation: Weaving Spiders",
        "description": "The place where fear festers and terror treads is also where those with the gift can reach across the veil.<br><br>When in the basement near the circle, press the <i>Ability Button 1</i> to begin the Invocation.<br><br>Invocations take {0} seconds. Other\u202fSurvivors\u202fwill see your\u202faura\u202fduring this and can join an ongoing interaction, increasing speed by {1}% each. If they have an Invocation perk equipped, they increase it by {2}% instead.<br><br>Once the Invocation is completed:<br><br><li>You become <b>Injured</b> and gain the <b>Broken</b> status effect for the rest of the trial.</li><li>Reduce the maximum required generator charges of all remaining generators by {3}.</li><br><br><i>Completing the Invocation disables that perk for all\u202fSurvivors.</i><br><br>Broken prevents Survivors from being healed.<br><br>\"I call upon the spirits of the night, to aid us in our desperate flight!\" - Sable",
        "role": "survivor",
        "character": 40,
        "tunables": [
            [
                "60"
            ],
            [
                "50"
            ],
            [
                "100"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Applepie/iconsPerks_InvocationWeavingSpiders.png"
    },
    "S41P02": {
        "categories": [
            "adaptation"
        ],
        "name": "Strength in Shadows",
        "description": "A chance for renewed power down where danger calls home.<br><br>When in the basement, this perk activates.<br><br>Unlocks the <i>Strength in Shadows</i> ability, which allows you to heal without a Med-kit at {0}% normal healing speed.<br><br>When you finish a heal in the basement, you see the\u202fKiller's\u202faura\u202ffor {1} seconds.<br><br>\"I\u2019m getting out of here, if it\u2019s the last thing I do.\u201d - Sable",
        "role": "survivor",
        "character": 40,
        "tunables": [
            [
                "70"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Applepie/iconsPerks_StrengthInShadows.png"
    },
    "S41P03": {
        "categories": null,
        "name": "Wicked",
        "description": "They can try to hurt you. But you\u2019re not going down so easily.<br><br>Your self-unhook attempts in the basement always succeed.<br><br>When you are unhooked or unhook yourself, you see the Killer's aura for {0} seconds.<br><br>\u201cI haven\u2019t let anyone get in my way before. You think I\u2019m gonna start now?\u201d - Sable",
        "role": "survivor",
        "character": 40,
        "tunables": [
            [
                "16",
                "18",
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Applepie/iconsPerks_Wicked.png"
    },
    "S42P01": {
        "categories": null,
        "name": "Mirrored Illusion",
        "description": "A familiar spell made unfamiliar in this corrupted landscape.<br><br>This perk activates after completing a total of {0}% worth of repairs on generators.<br><br>Press the Ability button 2 when next to a generator, totem, chest or exit gate to spawn a static illusion that lasts for {1} seconds.<br><br>Then, the perk deactivates.<br><br>\"Just... stay there... perfect!\" - Baermar",
        "role": "survivor",
        "character": 41,
        "tunables": [
            [
                "20"
            ],
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Churros/iconPerks_MirroredIllusion.png"
    },
    "S42P02": {
        "categories": null,
        "name": "Bardic Inspiration",
        "description": "It's time to give your audience a show. Will you bring the house down or will you choke?<br><br>Press the Ability button 1 while standing and motionless to enter the performance interaction that lasts up to {0} seconds and empowers Survivors within {1} meters. Roll a d20. This effect lasts for {2} seconds if the performance is completed.<br><br><li><b>1</b> | You scream, but nothing happens</li><li><b>2-10</b> |\u202fSkill Checks\u202fgive +1% progress</li><li><b>11-19</b> |\u202fSkill Checks\u202fgive +2% progress</li><li><b>20</b> |\u202fSkill Checks\u202fgive +3% progress</li><br><br>When the ability is canceled or the performance completes, it goes on cooldown for {3} seconds.<br><br>\"Listen closely! I'm about to save your life!\" - Aestri",
        "role": "survivor",
        "character": 41,
        "tunables": [
            [
                "15"
            ],
            [
                "16"
            ],
            [
                "90"
            ],
            [
                "110",
                "100",
                "90"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Churros/iconPerks_BardicInspiration.png"
    },
    "S42P03": {
        "categories": null,
        "name": "Still Sight",
        "description": "A clear mind and calm temperament will always find the means of their escape.<br><br>After not moving for {0} seconds, this perk activates.<br><br>Until you start moving, you see the\u202faura\u202fof the Killer as well as all generators and chests within {1} meters.<br><br>\"Breathe in. Breathe out. Now open your eyes.\" - Baermar",
        "role": "survivor",
        "character": 41,
        "tunables": [
            [
                "6",
                "5",
                "4"
            ],
            [
                "24"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Churros/iconPerks_StillSight.png"
    },
    "S43P01": {
        "categories": null,
        "name": "Finesse",
        "description": "The threat of danger can motivate any creature to strengthen its resolve.<br><br>This perk activates when you are healthy.<br><br><li>Your fast vaults are {0}% faster.</li><br><br>This perk goes on cooldown for {1} seconds after performing a fast vault.<br><br>\"Just need to push myself a bit further.\" - Lara Croft",
        "role": "survivor",
        "character": 42,
        "tunables": [
            [
                "20"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Donut/iconPerks_Finesse.png"
    },
    "S43P02": {
        "categories": null,
        "name": "Hardened",
        "description": "Live long enough, and survival will run in your blood.<br><br>This perk activates after you complete all of the following:<br><br><li>Unlock a chest;</li><li>Cleanse or bless a totem.</li><br><br>For the rest of the trial, anytime you would scream, reveal the Killer's aura for {0} seconds instead.<br><br>\"Got to keep quiet. That thing is still out there.\" - Lara Croft",
        "role": "survivor",
        "character": 42,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Donut/iconPerks_Hardened.png"
    },
    "S43P03": {
        "categories": null,
        "name": "Specialist",
        "description": "Adventure. Exploration. Excavation. You are in your element.<br><br>Each time you open or rummage through a chest, gain <b>1 token</b>, up to {0}.<br><br>When you perform a great Skill Check on a generator, consume <b>all tokens</b>. Then, for each token consumed, reduce the maximum required generator progress by {1}.<br><br>\"Well, then. Doesn't this feel familiar?\" - Lara Croft",
        "role": "survivor",
        "character": 42,
        "tunables": [
            [
                "6"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Donut/iconPerks_Specialist.png"
    },
    "S44P01": {
        "categories": null,
        "name": "Eyes of Belmont",
        "description": "A history of vampire-hunting imbues the bloodline with certain abilities.<br><br>When a generator is completed, the aura of the Killer is revealed to you for {0} seconds.<br><br>Whenever a Killer's aura is revealed for a specified amount of time, that time is increased by {1} seconds.<br><br>\"Ha! Your secret has been revealed!\" - Trevor",
        "role": "survivor",
        "character": 43,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "2"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Eclair/iconPerks_EyesOfBelmont.png"
    },
    "S44P02": {
        "categories": null,
        "name": "Exultation",
        "description": "Fortune favors the bold, even in the darkest corners of existence.<br><br>Stunning the Killer with a pallet upgrades your held item rarity to the next tier, then recharges {0}% of the item's maximum charges.<br><br>This perk has a {1}-second cooldown.<br><br>\"You will not take me this day!\" - Trevor",
        "role": "survivor",
        "character": 43,
        "tunables": [
            [
                "25"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Eclair/iconPerks_Exultation.png"
    },
    "S44P03": {
        "categories": null,
        "name": "Moment of Glory",
        "description": "A hero should always have the chance to make a comeback.<br><br>This perk activates after you open or rummage through {0} chests.<br><br>When you become injured, you also become <b>Broken</b>.<br><br>Automatically heal 1 health state after {1} seconds. Then, this perk deactivates.<br><br><i>This effect is canceled if you enter the dying state.<br><br>This perk will not activate if you are already suffering from the <b>Broken</b> status effect.</i><br><br>Broken prevents Survivors from being healed.<br><br>\"Never lose hope for a brighter tomorrow.\" - Trevor",
        "role": "survivor",
        "character": 43,
        "tunables": [
            [
                "2"
            ],
            [
                "80",
                "70",
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Eclair/iconPerks_MomentOfGlory.png"
    },
    "Saboteur": {
        "categories": [
            "strategy"
        ],
        "name": "Saboteur",
        "description": "Unlocks potential in one's aura reading ability.<br><br><li>See hook auras in a 56 meter radius from the pickup spot if another Survivor is being carried. Scourge Hooks are shown in yellow.</li><li>Unlocks the ability to sabotage hooks without a Toolbox.</li><li>Sabotaging a hook without a Toolbox takes 2.3 seconds.</li><li>The sabotage action has a {0} second cooldown.</li>",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "70",
                "65",
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_saboteur.png"
    },
    "SecondWind": {
        "categories": [
            "adaptation"
        ],
        "name": "Second Wind",
        "description": "When you have healed other Survivors for the equivalent of one health state, <i>Second Wind</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Second Wind</i> does not activate.<br><br>While <i>Second Wind</i> is activated, the next time you are unhooked or you unhook yourself, you are affected by the <b>Broken</b> status effect.\u00a0After a total duration of\u00a0{0} seconds,\u00a0<i>Second Wind</i> automatically heals you from injured to healthy.<br><br><i>Second Wind</i>\u00a0deactivates once you become healthy or if you are put into the dying state before <i>Second Wind</i> successfully triggers. You lose the <b>Broken</b> status effect.<br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "28",
                "24",
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Qatar/iconPerks_secondWind.png"
    },
    "SelfSufficient": {
        "categories": [
            "adaptation"
        ],
        "name": "Unbreakable",
        "description": "Past battles have taught you a thing or two about survival.<br><br>Grants the ability to fully recover from the dying state <b>once per trial</b>. Increases dying recovery speed by {0}%.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "25",
                "30",
                "35"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/L4D/iconPerks_unbreakable.png"
    },
    "Self_Care": {
        "categories": [
            "adaptation"
        ],
        "name": "Self-Care",
        "description": "Unlocks the <i>Self Care</i> ability, which allows you to heal without a Med-kit at {0}% normal healing speed.",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "25",
                "30",
                "35"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_selfCare.png"
    },
    "Slippery_Meat": {
        "categories": [
            "adaptation"
        ],
        "name": "Slippery Meat",
        "description": "You have developed an efficient way to get off hooks.<br><br><li>Grants up to {0} extra escape attempts on the hook.</li><li>Hook escape attempts have a {1}% increased chance to succeed.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_slipperyMeat.png"
    },
    "Small_Game": {
        "categories": [
            "perception"
        ],
        "name": "Small Game",
        "description": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Totems in a 45-degree cone within a range of {0} meters. Small Game has a cooldown of {1} seconds each time it activates. For each Dull Totem and Hex Totem cleansed by any player, gain a Token. Small Game's detection cone is reduced by 5 degrees per token.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "8",
                "10",
                "12"
            ],
            [
                "14",
                "12",
                "10"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_smallGame.png"
    },
    "SoleSurvivor": {
        "categories": [
            "concealment"
        ],
        "name": "Sole Survivor",
        "description": "As more of your friends fall to the Killer, you become shrouded in isolation and the Killer's <b>aura-reading abilities</b> towards you are disrupted.<br><br>Every time a fellow Survivor is killed or sacrificed, gain a token. For each token, your aura cannot be read by The Killer within a max range of {0} meters.<br><br>When you're the last Survivor alive:<li>Gain 75% action speed when repairing generators.</li><li>Gain 50% action speed while opening an exit gate or the Hatch.</li><br><br><b>Increases</b> your chances of being The Killer's Obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "20",
                "22",
                "24"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC2/iconPerks_soleSurvivor.png"
    },
    "Solidarity": {
        "categories": [
            "adaptation"
        ],
        "name": "Solidarity",
        "description": "Sharing painful experiences has the power to heal.<br><br>While injured, healing a Survivor without using a Med-kit also heals you at a {0}% conversion rate.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "50",
                "60",
                "70"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Mali/iconPerks_solidarity.png"
    },
    "SoulGuard": {
        "categories": [
            "adaptation"
        ],
        "name": "Soul Guard",
        "description": "You have been through immense hardship and you\u2019re stronger for it.<br><br>Gain the <b>Endurance</b> status effect for {0} seconds after being healed or having recovered from the dying state.<br><br>While cursed by a Hex, you can fully recover from the dying state.<br><br>This effect can only trigger once every 30 seconds.<br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "4",
                "6",
                "8"
            ],
            [
                "20"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Wales/iconPerks_soulGuard.png"
    },
    "Spine_Chill": {
        "categories": [
            "navigation",
            "strategy"
        ],
        "name": "Spine Chill",
        "description": "An unnatural tingle warns you of impending doom.<br><br>Get notified when the Killer is looking at you with a clear line of sight within a 36-meter range. Your speed while repairing, sabotaging, healing, unhooking, cleansing, blessing, opening exit gates and unlocking is increased by {0}%.<li>The effects of <i>Spine Chill</i> linger for 0.5 seconds after the Killer looks away or is out of range.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "2",
                "4",
                "6"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_spineChill.png"
    },
    "Sprint_Burst": {
        "categories": [
            "navigation"
        ],
        "name": "Sprint Burst",
        "description": "When starting to run, break into a sprint at {0}% of your normal running speed for a maximum of {1} seconds.<br><br>Causes the <b>Exhausted</b>\u00a0status effect for {2} seconds.<br><br><i>Sprint Burst</i> cannot be used while <b>Exhausted</b>.<br><br>You do not recover from the <b>Exhausted</b>\u00a0status effect while running.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_sprintBurst.png"
    },
    "StakeOut": {
        "categories": [
            "strategy"
        ],
        "name": "Stake Out",
        "description": "Getting close to the Killer fills you with determination. For each {0} seconds you are standing within the Killer Terror Radius and not in a chase, you gain a token up to a maximum of {1} tokens.<br><br>When <i>Stake Out</i> has at least <b>1 token</b>, good Skill Checks are considered great Skill Checks, consume <b>1 token</b>, and grant an additional 1% bonus to generator repair progress.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "15"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Finland/iconPerks_stakeOut.png"
    },
    "Streetwise": {
        "categories": [
            "support"
        ],
        "name": "Streetwise",
        "description": "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of item charge by {0}% for you and allies within a {1} meter range. Once out of range, this effect persists for {2} seconds.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "15",
                "20",
                "25"
            ],
            [
                "8"
            ],
            [
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_streetwise.png"
    },
    "Technician": {
        "categories": [
            "concealment",
            "strategy"
        ],
        "name": "Technician",
        "description": "You are apt at handling machinery with the greatest care and precision.<br><br>The noises caused by your repairs and their hearing distance are reduced by {0} meters.<br><br>On a failed repair Skill Check, the following effects happen:<br><br><li>The generator explosion will be prevented.</li><li>The generator loses progress as usual.</li><li>An additional {1}% progress is lost.</li>",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "8"
            ],
            [
                "5",
                "4",
                "3"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC4/iconPerks_technician.png"
    },
    "Tenacity": {
        "categories": [
            "adaptation",
            "navigation"
        ],
        "name": "Tenacity",
        "description": "There is nothing stopping you.<br><br>Your ferocious tenacity in dire situations allows you to crawl {0}% faster and recover at the same time. Grunts of pain while in the dying state are reduced by 75%.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Finland/iconPerks_tenacity.png"
    },
    "TheMettleOfMan": {
        "categories": [
            "adaptation"
        ],
        "name": "Mettle of Man",
        "description": "Evil has a way of always finding you.<br><br>After you earn {0} Protection Hit scoring events, <i>Mettle of Man</i> activates.<br><br>Once activated, the next occasion that would put you into the <b>dying state</b> from the <b>injured state</b> is ignored.<br><br>The next time you heal back to full health, your aura will be revealed to the Killer when you are further than {1} meters from the Killer.<br><br><i>Mettle of Man</i> will deactivate the next time you are put into the dying state.<br><br><li><i>Increases your chances to be the Killer\u2019s Obsession.</i></li><br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "3"
            ],
            [
                "12",
                "14",
                "16"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Ash/iconPerks_mettleOfMan.png"
    },
    "This_Is_Not_Happening": {
        "categories": [
            "safeguard",
            "strategy"
        ],
        "name": "This Is Not Happening",
        "description": "You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing and healing get {0}% bigger when you are injured.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "10",
                "20",
                "30"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_thisIsNotHappening.png"
    },
    "Up_The_Ante": {
        "categories": [
            "support"
        ],
        "name": "Up the Ante",
        "description": "All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you.<br><br>For each other Survivor still alive, grant a {0}% bonus of luck to all remaining Survivors.",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC3/iconPerks_upTheAnte.png"
    },
    "Urban_Evasion": {
        "categories": [
            "navigation"
        ],
        "name": "Urban Evasion",
        "description": "Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by {0}%.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "90",
                "95",
                "100"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_urbanEvasion.png"
    },
    "Vigil": {
        "categories": [
            "support"
        ],
        "name": "Vigil",
        "description": "You look over your friends even in dire situations. You and your allies within a {0} meter range recover from the <b>Blindness, Broken, Exhausted, Exposed, Hemorrhage, Hindered, Mangled</b> and <b>Oblivious</b> status effects {1}% faster. Once out of range, this effect persists for {2} seconds.",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "8"
            ],
            [
                "20",
                "25",
                "30"
            ],
            [
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/England/iconPerks_vigil.png"
    },
    "Visionary": {
        "categories": [
            "perception"
        ],
        "name": "Visionary",
        "description": "You\u2019re remarkably focused on your means of escape.<br><br>You see generator\u2019s auras within {0} meters.<br><br>Anytime a generator is completed, <i>Visionary</i> is disabled for {1} seconds.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "32"
            ],
            [
                "20",
                "18",
                "16"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Yemen/iconPerks_visionary.png"
    },
    "WakeUp": {
        "categories": [
            "perception",
            "strategy"
        ],
        "name": "Wake Up!",
        "description": "Unlocks potential in one's aura reading ability. Once all generators are powered, exit gates are revealed to you within a {0} meter range. While opening the exit gates, reveal your aura to other Survivors up to {1} meters.<br><br>While <i>Wake Up!</i> is active, you open the exit gates {2}% faster.",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "128"
            ],
            [
                "128"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/England/iconPerks_wakeUp.png"
    },
    "WellMakeIt": {
        "categories": [
            "safeguard"
        ],
        "name": "We'll make it",
        "description": "Helping others heightens your morale.<br><br>When you rescue a Survivor from a hook, gain a {0}% speed increase while healing others for {1} seconds.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "100"
            ],
            [
                "30",
                "60",
                "90"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_wellMakeIt.png"
    },
    "WereGonnaLiveForever": {
        "categories": [
            "support"
        ],
        "name": "We're Gonna Live Forever",
        "description": "Your few friends deserve the best protection.<br><br>When healing another Survivor in the dying state, your healing speed is increased by {0}%.<br><br>Once healing is complete, the healed Survivor gains the <b>Endurance</b> status effect for {1} seconds. This effect has a {2}-second cooldown.<br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "100"
            ],
            [
                "6",
                "8",
                "10"
            ],
            [
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC5/iconPerks_WereGonnaLiveForever.png"
    },
    "WindowsOfOpportunity": {
        "categories": [
            "perception"
        ],
        "name": "Windows of Opportunity",
        "description": "Unlocks potential in one's aura reading ability. Auras of pallets, breakable walls, and vault locations are revealed to you when within a {0} meter range.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "24",
                "28",
                "32"
            ],
            [
                "10",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Kate/iconPerks_windowsOfOpportunity.png"
    }
};
const killerPerks = 
{
    "Agitation": {
        "categories": [
            "enhancement"
        ],
        "name": "Agitation",
        "description": "You get excited in anticipation of hooking your prey.<br><br>Increases your movement speed while transporting bodies by {0}%. While transporting a body, your Terror Radius is increased by {1} meters.",
        "role": "killer",
        "character": 268435456,
        "tunables": [
            [
                "6",
                "12",
                "18"
            ],
            [
                "12"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_agitation.png"
    },
    "Bamboozle": {
        "categories": [
            "chasing",
            "trickery"
        ],
        "name": "Bamboozle",
        "description": "Your vault speed is {0}% faster.<br><br>Performing a vault action calls upon The Entity to block that vault location to Survivors for {1} seconds.<br><br>Only 1 vault location may be blocked in this way at any time.<br><br>Does not affect pallets.",
        "role": "killer",
        "character": 268435467,
        "tunables": [
            [
                "5",
                "10",
                "15"
            ],
            [
                "8",
                "12",
                "16"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Guam/iconPerks_bamboozle.png"
    },
    "BBQAndChilli": {
        "categories": [
            "tracking"
        ],
        "name": "Barbecue & Chili",
        "description": "A deep bond with The Entity unlocks potential in one's aura reading ability.<li>After hooking a Survivor, all other Survivors' auras are revealed to you for {0} seconds when they are further than {1} meters from the hook.</li>",
        "role": "killer",
        "character": 268435464,
        "tunables": [
            [
                "5"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Cannibal/iconPerks_BBQAndChili.png"
    },
    "BeastOfPrey": {
        "categories": [
            "chasing"
        ],
        "name": "Beast of Prey",
        "description": "Your lust for a kill is so intense that your connection with The Entity is momentarily lost, making you totally unpredictable.<br><br>Grants the <b>Undetectable</b> status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust.<br><br><li>Gain {0}% more Bloodpoints for actions in the Hunter Category.</li><br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
        "role": "killer",
        "character": 268435463,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC5/iconPerks_BeastOfPrey.png"
    },
    "Bitter_Murmur": {
        "categories": [
            "tracking"
        ],
        "name": "Bitter Murmur",
        "description": "Unlocks potential in one's aura reading ability. Each time a generator is fully repaired, Survivors within {0} meters of the completed generator will be revealed for {1} seconds.<br><br>When the last generator is fully repaired, all the Survivors' auras are revealed for {2} seconds.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "16"
            ],
            [
                "5"
            ],
            [
                "5",
                "7",
                "10"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_bitterMurmur.png"
    },
    "BloodEcho": {
        "categories": [
            "hinderance"
        ],
        "name": "Blood Echo",
        "description": "The agony of one is inflicted on others.<br><br>When hooking a Survivor, all injured Survivors suffer from the <b>Hemorrhage</b>\u00a0and <b>Exhausted</b>\u00a0status effects for {0}\u00a0seconds.<br><br>Exhausted prevents Survivors from activating exhausting perks.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until healed.",
        "role": "killer",
        "character": 268435473,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Sweden/iconPerks_bloodEcho.png"
    },
    "BloodHound": {
        "categories": [
            "tracking"
        ],
        "name": "Bloodhound",
        "description": "Like a hunting scent hound, you smell traces of blood at a great distance.<br><br>Fresh blood marks are considerably more discernible than normal and can be tracked for {0} seconds longer than normal.",
        "role": "killer",
        "character": 268435457,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_bloodhound.png"
    },
    "BloodWarden": {
        "categories": [
            "trickery",
            "obstruction"
        ],
        "name": "Blood Warden",
        "description": "As soon as an exit gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you.<br><br>Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for\u00a0{0} seconds.",
        "role": "killer",
        "character": 268435465,
        "tunables": [
            [
                "30",
                "40",
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/England/iconPerks_bloodWarden.png"
    },
    "BoonDestroyer": {
        "categories": null,
        "name": "Shattered Hope",
        "description": "To capture your prey, you must first extinguish their hope.<br><br>Whenever you snuff a Boon Totem, the totem is destroyed instead.<br><br>When you destroy a Boon Totem this way, the auras of all Survivors inside the Boon Totem range are revealed to you for {0} seconds.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "6",
                "7",
                "8"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/Meteor/iconPerks_BoonDestroyer.png"
    },
    "Brutal_Strength": {
        "categories": [
            "enhancement"
        ],
        "name": "Brutal Strength",
        "description": "Your great strength allows you to shred through your prey's defenses.<br><br>Destroy <b>dropped pallets, breakable walls, and generators</b> {0}% faster.",
        "role": "killer",
        "character": 268435456,
        "tunables": [
            [
                "10",
                "15",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_brutalStrength.png"
    },
    "CorruptIntervention": {
        "categories": [
            "obstruction"
        ],
        "name": "Corrupt Intervention",
        "description": "Your prayers invoke a dark power that meddles with the Survivors\u2019s chances of survival.<br><br>{0} generators located furthest from you are blocked by The Entity for {1} seconds at the start of the trial.<br><br>Survivors cannot repair these generators for the duration. Affected generators are highlighted by a white aura.<br><br><i>Corrupt Intervention</i>\u00a0deactivates when any Survivor enters the dying state.",
        "role": "killer",
        "character": 268435470,
        "tunables": [
            [
                "3"
            ],
            [
                "80",
                "100",
                "120"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Mali/iconPerks_corruptIntervention.png"
    },
    "Coulrophobia": {
        "categories": [
            "hinderance"
        ],
        "name": "Coulrophobia",
        "description": "Even those without a fear of clowns know to be terrified of you.<br><br>Survivors within your Terror Radius have a {0}% penalty to healing progression speed, and healing Skill Checks move 50% faster.<br>",
        "role": "killer",
        "character": 268435467,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Guam/iconPerks_coulrophobia.png"
    },
    "CruelConfinement": {
        "categories": [
            "trickery"
        ],
        "name": "Cruel Limits",
        "description": "Your ties to the otherworldly manifest when your prey attempts to get away.<br><br>Every time a generator is completed, all windows and vault locations are blocked for all Survivors for the next {0} seconds.<br><br>You see the aura of the vault locations blocked by <i>Cruel Limits</i> for the duration.",
        "role": "killer",
        "character": 268435472,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Qatar/iconPerks_cruelConfinement.png"
    },
    "DarkDevotion": {
        "categories": [
            "trickery"
        ],
        "name": "Dark Devotion",
        "description": "The display of your powers creates a whirlwind of panic that spreads throughout the land.<br><br>You become obsessed with one Survivor. When the Obsession loses a health state, your Terror Radius transfers to the Obsession for {1}\u00a0seconds, and its radius is set to {0}\u00a0meters.<br><br>You are granted the <b>Undetectable</b> status effect for the duration.<br><br>The Survivor with the transferred Terror Radius is also considered to be \"inside the Terror Radius\" for other purposes.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
        "role": "killer",
        "character": 268435470,
        "tunables": [
            [
                "32"
            ],
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Mali/iconPerks_darkDevotion.png"
    },
    "DeadMansSwitch": {
        "categories": [
            "obstruction"
        ],
        "name": "Dead Man\u2019s Switch",
        "description": "When you hook a Survivor, <i>Dead Man\u2019s Switch</i> activates. The first Survivor that stops repairing a generator causes The Entity to block it for {0} seconds.<br><br>The affected generator is highlighted by a white aura.<br><br><i>Dead Man\u2019s Switch</i> cannot reactivate while it is blocking a generator.",
        "role": "killer",
        "character": 268435474,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_deadManSwitch.png"
    },
    "Deathbound": {
        "categories": [
            "trickery",
            "tracking"
        ],
        "name": "Deathbound",
        "description": "Those whose lives are intertwined in darkness are destined to suffer together.<br><br>When a Survivor heals another Survivor, they scream and activate <i>Deathbound</i>. When the healer is farther than {0}\u00a0meters away from the Survivor they healed,\u00a0they suffer from the <b>Oblivious</b> status effect. This lasts until the healer loses a health state.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        "role": "killer",
        "character": 268435475,
        "tunables": [
            [
                "16",
                "12",
                "8"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Wales/iconPerks_deathbound.png"
    },
    "Deerstalker": {
        "categories": [
            "tracking"
        ],
        "name": "Deerstalker",
        "description": "Unlocks potential in one's aura reading ability. Reveals dying Survivors' auras when standing within a {0} meter range.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "20",
                "28",
                "36"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_deerstalker.png"
    },
    "Discordance": {
        "categories": [
            "obstruction"
        ],
        "name": "Discordance",
        "description": "Any generator within a range of {0} meters that is being repaired by two or more Survivors is marked by a yellow aura. When the generator is first highlighted, Discordance triggers a loud noise notification on the generator. After the generator is no longer within range or is no longer being repaired by two or more Survivors, the aura remains for another 4 seconds.",
        "role": "killer",
        "character": 268435469,
        "tunables": [
            [
                "64",
                "96",
                "128"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Kenya/iconPerks_discordance.png"
    },
    "Distressing": {
        "categories": [
            "trickery"
        ],
        "name": "Distressing",
        "description": "Your horrifying emanation strikes at a supernaturally long distance.<br><br>Your Terror Radius is increased by {0}%. Gain {1}% more Bloodpoints for actions in the Deviousness category.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "22",
                "24",
                "26"
            ],
            [
                "100"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_distressing.png"
    },
    "DragonsGrip": {
        "categories": [
            "hinderance"
        ],
        "name": "Dragon\u2019s Grip",
        "description": "After damaging a generator, for the next {0} seconds, the first Survivor that interacts with it will scream, revealing their location for {1} seconds, and becoming afflicted with the <b>Exposed</b> status effect for {2} seconds.<br><br><i>Dragon\u2019s Grip</i> has a cooldown of {3} seconds.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435476,
        "tunables": [
            [
                "30"
            ],
            [
                "4"
            ],
            [
                "60"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Yemen/iconPerks_dragonsGrip.png"
    },
    "Dying_Light": {
        "categories": [
            "hinderance"
        ],
        "name": "Dying Light",
        "description": "You become <b>obsessed</b> with one Survivor.<br><br>Your Obsession gains a {0}% action speed bonus to unhooking and healing other Survivors.<br><br>Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token.<br><br>If the Obsession is alive, all Survivors who are not the Obsession get {1}% penalty to repair, healing and sabotage speeds for each token.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "killer",
        "character": 268435461,
        "tunables": [
            [
                "33"
            ],
            [
                "2",
                "2.5",
                "3"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC2/iconPerks_dyingLight.png"
    },
    "Enduring": {
        "categories": [
            "enhancement"
        ],
        "name": "Enduring",
        "description": "You are resilient to pain.<br><br>You reduce the duration of <b>pallet stuns</b> by {0}%. Has no effect while carrying a Survivor.",
        "role": "killer",
        "character": 268435458,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_enduring.png"
    },
    "FireUp": {
        "categories": [
            "enhancement"
        ],
        "name": "Fire Up",
        "description": "The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation.<br><br>Each time the Survivors complete repairs on a generator, Fire Up grows in power.<br><br><li>For each generator completed, gain a {0}% stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets and breakable walls for the remainder of the trial.</li>",
        "role": "killer",
        "character": 268435465,
        "tunables": [
            [
                "3",
                "3.5",
                "4"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/England/iconPerks_fireUp.png"
    },
    "ForcedPenance": {
        "categories": [
            "hinderance"
        ],
        "name": "Forced Penance",
        "description": "Those who stand in the way of duty will\u00a0suffer\u00a0harsh judgment.<br><br>Survivors\u00a0who take a protection hit are\u00a0inflicted with the <b>Broken</b> status effect for {0}\u00a0seconds.<br><br>Broken prevents Survivors from being healed.",
        "role": "killer",
        "character": 268435475,
        "tunables": [
            [
                "60",
                "70",
                "80"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Wales/iconPerks_forcedPenance.png"
    },
    "FranklinsLoss": {
        "categories": [
            "cruelty"
        ],
        "name": "Franklin's Demise",
        "description": "Your basic attacks make Survivors drop their item on impact. While on the ground, it takes up to {0} seconds for the item to <b>lose all of its charges</b> if it is not picked up.<br><br>Reveal items on the ground within {1} meters with a white aura. The Aura will slowly fade to red until the Item is empty of charges.",
        "role": "killer",
        "character": 268435464,
        "tunables": [
            [
                "150",
                "120",
                "90"
            ],
            [
                "32"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Cannibal/iconPerks_franklinsLoss.png"
    },
    "FurtiveChase": {
        "categories": [
            "chasing",
            "trickery"
        ],
        "name": "Furtive Chase",
        "description": "You lurk in the shadows, eliminating your victims one by one.<br><br>You become <b>obsessed</b> with one Survivor. When your Obsession is hooked, gain the <b>Undetectable</b> status effect and a {0}% <b>Haste</b> status effect for {1} seconds.<br><br>When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.<br><br>Haste increases Killer movement speed.",
        "role": "killer",
        "character": 268435471,
        "tunables": [
            [
                "5"
            ],
            [
                "14",
                "16",
                "18"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Oman/iconPerks_furtiveChase.png"
    },
    "Gearhead": {
        "categories": [
            "tracking"
        ],
        "name": "Gearhead",
        "description": "You\u2019ve got an ear for\u00a0well-oiled gears.<br><br>After a survivor loses a health state by any means, <i>Gearhead</i> activates for {0} seconds.<br><br>While <i>Gearhead</i> is active, every time a Survivor performs a good Skill Check while repairing, their aura is revealed to you for {1} seconds.",
        "role": "killer",
        "character": 268435474,
        "tunables": [
            [
                "30"
            ],
            [
                "6",
                "7",
                "8"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_gearHead.png"
    },
    "GeneratorOvercharge": {
        "categories": [
            "obstruction"
        ],
        "name": "Overcharge",
        "description": "You are fuelled by your hate for progress.<br><br><i>Overcharge</i> a generator by performing the <b>Damage Generator</b> action. The next Survivor interacting with that generator is faced with a difficult Skill Check. Failing the Skill Check results in an additional {0}% loss of progress.<br><br>Succeeding the Skill Check grants no progress but prevents the generator explosion.<br><br>After <i>Overcharge</i> is applied to a generator, its regression speed increases from 85% of normal to 130% of normal over the next 30 seconds.",
        "role": "killer",
        "character": 268435462,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC4/iconPerks_generatorOvercharge.png"
    },
    "HangmansTrick": {
        "categories": [
            "obstruction"
        ],
        "name": "Scourge Hook: Hangman's Trick",
        "description": "Your ingenious modifications to hooks alert you of tampering.<br><br>At the start of the trial, 4 random hooks are changed into scourge hooks. You see their auras in white.<br><br>Gain a notification when a Survivor begins sabotaging a hook.<br><br>While carrying a Survivor, see the aura of any Survivor within {0} meters of a scourge hook.",
        "role": "killer",
        "character": 268435466,
        "tunables": [
            [
                "8",
                "10",
                "12"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Finland/iconPerks_hangmansTrick.png"
    },
    "HexBloodFavor": {
        "categories": [
            "chasing"
        ],
        "name": "Hex: Blood Favor",
        "description": "A Hex that gains The Entity\u2019s favor when blood is spilled.<br><br>Injuring a Survivor will call upon The Entity to block pallets from being pulled down within a {0} meter radius of the Survivor location for {1} seconds.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
        "role": "killer",
        "character": 268435476,
        "tunables": [
            [
                "24",
                "28",
                "32"
            ],
            [
                "15"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Yemen/iconPerks_hexBloodFavor.png"
    },
    "HexRetribution": {
        "categories": [
            "trickery",
            "tracking"
        ],
        "name": "Hex: Retribution",
        "description": "A Hex that lashes out upon its destruction. Those who cross you will be punished.<br><br>Any Survivor interacting with a Dull Totem or a Hex Totem will suffer from the <b>Oblivious</b> status effect for {0} seconds.<br><br>If any Hex Totem is removed, including this one, the auras of all Survivors are revealed for {1} seconds.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        "role": "killer",
        "character": 268435474,
        "tunables": [
            [
                "35",
                "40",
                "45"
            ],
            [
                "15"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Ukraine/iconPerks_hexRetribution.png"
    },
    "HexUndying": {
        "categories": [
            "obstruction",
            "tracking"
        ],
        "name": "Hex: Undying",
        "description": "While <i>Hex: Undying</i> is active, Survivors within {0} meters of any Dull Totem have their aura revealed.<br><br>When another Hex Totem would be cleansed, that Totem's Hex transfers to the Hex: Undying Totem, deactivating Hex: Undying. Any tokens the transferred Hex had are transferred as well.",
        "role": "killer",
        "character": 268435476,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Yemen/iconPerks_hexUndying.png"
    },
    "Hex_Devour_Hope": {
        "categories": [
            "trickery"
        ],
        "name": "Hex: Devour Hope",
        "description": "A Hex rooting its power on hope. The false hope of Survivors ignites your hunger.<br><br>When a Survivor is unhooked at least 24 meters away, Devour Hope receives a token.<br><br><li>2 Tokens: Gain a {0}% <b>Haste</b> status effect, 10 seconds after hooking a Survivor, for a duration of 10 seconds.</li><li>3 Tokens: Survivors suffer from the <b><i>Exposed</i></b> status effect.</li><li>5 Tokens: Grants the ability to kill Survivors by your own hand.</li><br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br>Exposed Survivors will be downed by basic attacks even if uninjured.<br><br>Haste increases Killer movement speed.",
        "role": "killer",
        "character": 268435460,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC3/iconPerks_devourHope.png"
    },
    "Hex_HauntedGround": {
        "categories": [
            "trickery"
        ],
        "name": "Hex: Haunted Ground",
        "description": "Two trapped Hex Totems will spawn in the trial.<br><br>When either one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the <b>Exposed</b> status effect for {0} seconds.<br><br>The remaining trapped Hex Totem immediately becomes a Dull Totem.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435468,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Haiti/iconPerks_hauntedGround.png"
    },
    "Hex_HuntressLullaby": {
        "categories": [
            "obstruction"
        ],
        "name": "Hex: Huntress Lullaby",
        "description": "A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey's attention.<br><br>Survivors receive a {0}% regression penalty when missing a Skill Check while healing or repairing.<br><br>Each time a Survivor is hooked, Huntress Lullaby grows in power. It affects healing and repairing Skill Check warnings:<br><br><li><b>1 to 4 Tokens:</b> Time between the Skill Check warning sound and the Skill Check becomes shorter.</li><li><b>5 Tokens:</b> No Skill Check warning.</li><br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
        "role": "killer",
        "character": 268435463,
        "tunables": [
            [
                "2",
                "4",
                "6"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/DLC5/iconPerks_HuntressLullaby.png"
    },
    "Hex_Ruin": {
        "categories": [
            "obstruction"
        ],
        "name": "Hex: Ruin",
        "description": "A Hex that affects all Survivors' generator repair progress.<br><br>All generators are affected by <i>Hex: Ruin</i>. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at {0}% of the normal regression speed.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
        "role": "killer",
        "character": 268435460,
        "tunables": [
            [
                "50",
                "75",
                "100"
            ],
            [
                "0"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC3/iconPerks_ruin.png"
    },
    "Hex_The_Third_Seal": {
        "categories": [
            "cruelty"
        ],
        "name": "Hex: The Third Seal",
        "description": "A Hex that hinders one's aura reading ability.<br><br>Hitting a Survivor with a <i>basic attack</i> or a <i>special attack</i> while the Hex Totem is active applies the <b>Blindness</b> status effect. This effect applies to the last {0} Survivors hit.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br>Blindness prevents Survivors from seeing auras.",
        "role": "killer",
        "character": 268435460,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC3/iconPerks_theThirdSeal.png"
    },
    "Hex_Thrill_Of_The_Hunt": {
        "categories": [
            "obstruction"
        ],
        "name": "Hex: Thrill of the Hunt",
        "description": "A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthens your Totems.<br><br>For each Dull and Hex Totem remaining on the map gain a token.<br><br><li>Gain {0}% more Bloodpoints for actions in the Hunter category for each token.</li><li>Survivors' cleansing and blessing speed is reduced by {1}% for each token.</li><br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "10"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/DLC3/iconPerks_thrillOfTheHunt.png"
    },
    "ImAllEars": {
        "categories": [
            "tracking"
        ],
        "name": "I'm All Ears",
        "description": "Your keen senses are sharpened in the dark realm of The Entity.<br><br>Unlocks potential in one's aura reading ability. Any Survivor performing a rushed action within 48 meters from your location will have their aura revealed for {0} seconds.<br><br><i>I'm All Ears</i> can only be triggered once every {1} seconds.",
        "role": "killer",
        "character": 268435471,
        "tunables": [
            [
                "8"
            ],
            [
                "60",
                "45",
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Oman/iconPerks_imAllEars.png"
    },
    "InfectiousFright": {
        "categories": [
            "tracking"
        ],
        "name": "Infectious Fright",
        "description": "The cries of the unfaithful make your heart leap.<br><br>Any Survivors that are within your Terror Radius while another Survivor is put into the dying state will scream and reveal their location to you for {0} seconds.",
        "role": "killer",
        "character": 268435470,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Mali/iconPerks_infectiousFright.png"
    },
    "Insidious": {
        "categories": [
            "trickery"
        ],
        "name": "Insidious",
        "description": "Unlocks the stealth ability.<br><br>Standing still for {0}\u00a0seconds grants you the <b>Undetectable</b> status effect until you move or act again.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "4",
                "3",
                "2"
            ],
            [
                "0"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_insidious.png"
    },
    "InTheDark": {
        "categories": [
            "trickery"
        ],
        "name": "Knock Out",
        "description": "The trauma caused by your brutal attacks makes crying for help painfully difficult.<br><br><li>Survivors put into the dying state by your basic attacks are not revealed to other Survivors when they are standing outside of a {2}-meter range.</li><li>Survivors put into the dying state by your basic attacks crawl {1}% slower for {0} seconds, and their recovery speed is reduced by 25%.</li><li>During this time, Survivors are affected by the <b>Blindness</b> status effect.</li><br><br>Blindness prevents Survivors from seeing auras.",
        "role": "killer",
        "character": 268435464,
        "tunables": [
            [
                "15"
            ],
            [
                "50"
            ],
            [
                "32",
                "24",
                "16"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Cannibal/iconPerks_knockOut.png"
    },
    "Ironmaiden": {
        "categories": [
            "tracking",
            "trickery"
        ],
        "name": "Iron Maiden",
        "description": "You open lockers {0}% faster.<br><br>Survivors who exit lockers suffer from the <b>Exposed</b> status effect for {2} seconds and scream, revealing their location for {1} seconds.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435469,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ],
            [
                "4"
            ],
            [
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Kenya/iconPerks_ironMaiden.png"
    },
    "Iron_Grasp": {
        "categories": [
            "enhancement"
        ],
        "name": "Iron Grasp",
        "description": "Your powerful hold on the Survivors causes escapes to be nearly impossible.<br><br>Effects of Survivor struggling are reduced by {0}%. Time to struggle out of your grasp is increased by {1}%.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "75"
            ],
            [
                "4",
                "8",
                "12"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_ironGrasp.png"
    },
    "K22P01": {
        "categories": [
            "tracking"
        ],
        "name": "Hoarder",
        "description": "You protect what little you have and are attentive to any disturbance of your stockpiles.<br><br>Survivors reveal their location when they interact with a\u00a0chest\u00a0or when they pick up an item within\u00a0{0} meters of your location.<br><br>The trial begins with up to\u00a0{1} additional\u00a0Chests in the environment.",
        "role": "killer",
        "character": 268435477,
        "tunables": [
            [
                "32",
                "48",
                "64"
            ],
            [
                "2"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Aurora/iconPerks_Hoarder.png"
    },
    "K22P02": {
        "categories": [
            "obstruction"
        ],
        "name": "Oppression",
        "description": "Life has been difficult for you,\u00a0so you\u2019ll make it difficult for others.<br><br>When you damage a generator, up to\u00a0{0} other random generators also begin regressing.<br><br>If the affected generators are being repaired, any Survivors repairing them receive a difficult Skill Check.<br><br><i>Oppression</i> has a cooldown of {1} seconds.",
        "role": "killer",
        "character": 268435477,
        "tunables": [
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Aurora/iconPerks_Oppression.png"
    },
    "K22P03": {
        "categories": [
            "cruelty"
        ],
        "name": "Coup de Gr\u00e2ce",
        "description": "As the\u00a0end nears,\u00a0you go in for the kill.<br><br>Each time a generator is completed, Coup de Gr\u00e2ce grows in power. Gain 2 tokens, with a maximum of 5 tokens maximum.<br><br>Consume one token to increase the distance of your next lunge attack by {0}%.",
        "role": "killer",
        "character": 268435477,
        "tunables": [
            [
                "70",
                "75",
                "80"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Aurora/iconPerks_coupDeGrace.png"
    },
    "K23P01": {
        "categories": [
            "cruelty"
        ],
        "name": "Starstruck",
        "description": "Your unmatched showmanship dazzles all.<br><br>While carrying a Survivor, any other Survivors within your Terror Radius suffer from the <b>Exposed</b> status effect.<br><br>The effect persists for {0} seconds on Survivors who leave your Terror Radius, as well as those within the radius when you hook or release the carried Survivor.<br><br><i>Starstruck</i> has a cooldown of {1} seconds once a Survivor is no longer carried.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435478,
        "tunables": [
            [
                "26",
                "28",
                "30"
            ],
            [
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Comet/iconPerks_Starstruck.png"
    },
    "K23P02": {
        "categories": [
            "chasing"
        ],
        "name": "Hex: Crowd Control",
        "description": "A Hex that ensures those lesser than you are properly herded.<br><br>When a Survivor performs a <b>rushed</b> vault, the vault becomes blocked by The Entity. This applies for up to {0} vaults.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
        "role": "killer",
        "character": 268435478,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Comet/iconPerks_HexCrowdControl.png"
    },
    "K23P03": {
        "categories": [
            "obstruction"
        ],
        "name": "No Way Out",
        "description": "You're not going to let just anyone into the VIP room.<br><br>After hooking a Survivor for the first time, <i>No Way Out</i> gains a token. <b>Once the exit gates have been powered</b>, <i>No Way Out</i> activates.<li>When a Survivor interacts with an exit gate switch, you receive a loud noise notification. The Entity then blocks both exit gate switches for {0} seconds, plus an additional {1} seconds for each token in your possession.</li>",
        "role": "killer",
        "character": 268435478,
        "tunables": [
            [
                "12"
            ],
            [
                "6",
                "9",
                "12"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Comet/iconPerks_NoWayOut.png"
    },
    "K24P01": {
        "categories": [
            "tracking"
        ],
        "name": "Lethal Pursuer",
        "description": "You've been designed to track down and eliminate targets.<br><br><li>At the start of the trial, the auras of all Survivors are revealed to you for {0} seconds.</li><li>Any time a Survivor's aura is shown for a period of time, its duration is increased by 2 seconds.</li>",
        "role": "killer",
        "character": 268435479,
        "tunables": [
            [
                "7",
                "8",
                "9"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_lethalPursuer.png"
    },
    "K24P02": {
        "categories": [
            "trickery"
        ],
        "name": "Hysteria",
        "description": "You know how to brutalize one member of a team to cause a panic.<br><br>Whenever a healthy Survivor becomes injured by any means, all injured Survivors suffer from the <b>Oblivious</b> status effect for {0} seconds.<br><br><i>Hysteria</i> can only trigger once every {1} seconds.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        "role": "killer",
        "character": 268435479,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ],
            [
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_hysteria.png"
    },
    "K24P03": {
        "categories": [
            "obstruction"
        ],
        "name": "Eruption",
        "description": "The NE-\u03b1 parasite provides you with the intelligence and awareness needed to set a trap.<br><br>After kicking a generator, its aura is highlighted in yellow.<br><br><li>Whenever a Survivor enters the dying state, every affected generator explodes, losing {0}% worth of progress, and starts to regress.</li><li>Any Survivor repairing a generator when it explodes will scream and reveal their aura for {1} seconds.</li><br><br><i>Eruption</i> has a cooldown of {2} seconds.",
        "role": "killer",
        "character": 268435479,
        "tunables": [
            [
                "10"
            ],
            [
                "8",
                "10",
                "12"
            ],
            [
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Eclipse/iconPerks_eruption.png"
    },
    "K25P01": {
        "categories": null,
        "name": "Deadlock",
        "description": "You induce mental suffering by crushing any hope of escape.<br><br>After a generator is repaired, The Entity blocks the generator with the most progress for {0} seconds. You see its white aura during this time.",
        "role": "killer",
        "character": 268435480,
        "tunables": [
            [
                "15",
                "20",
                "25"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Gemini/iconPerks_Deadlock.png"
    },
    "K25P02": {
        "categories": null,
        "name": "Hex: Plaything",
        "description": "A Hex that toys with a victim's suffering.<br><br>The first time you hook a Survivor, they become Cursed and <i>Hex: Plaything</i> activates on a Dull Totem. The Cursed Survivor suffers from the <b>Oblivious</b> status effect until <i>Hex: Plaything</i> is cleansed.<br><br><i>Hex: Plaything</i>'s totem aura is revealed to the Cursed Survivor when within {0} meters of it. For the first {1} seconds, only the Cursed Survivor can cleanse the totem.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        "role": "killer",
        "character": 268435480,
        "tunables": [
            [
                "24",
                "20",
                "16"
            ],
            [
                "90"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Gemini/iconPerks_HexPlaything.png"
    },
    "K25P03": {
        "categories": null,
        "name": "Scourge Hook: Gift of Pain",
        "description": "You are the bringer of sweet pain.<br><br>At the start of the trial, {0} random hooks are changed into scourge hooks. You see their auras in white.<br><br>When a Survivor is unhooked from a scourge hook, they suffer from the <b>Hemorrhage</b> and <b>Mangled</b> status effect for {1} seconds. The first time the Survivor is healed, they suffer a {2}% speed penalty to healing and repairing actions until injured again.<br><br>Hemorrhage\u00a0regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
        "role": "killer",
        "character": 268435480,
        "tunables": [
            [
                "4"
            ],
            [
                "90"
            ],
            [
                "10",
                "13",
                "16"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Gemini/iconPerks_ScourgeHookGiftOfPain.png"
    },
    "K26P01": {
        "categories": null,
        "name": "Grim Embrace",
        "description": "Your act of servitude to The Entity has not gone unnoticed.<br><br>Each time a Survivor is hooked for the first time, gain a token. When moving 16 meters away from the hook, all generators are blocked for {0} seconds.<br><br>Upon reaching {1} tokens, when moving 16 meters away from the hook, The Entity instead blocks all generators for {2} seconds. The Obsession's aura is revealed to you for {3} seconds.<br><br>Then, <i>Grim Embrace</i> deactivates.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "killer",
        "character": 268435481,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ],
            [
                "4"
            ],
            [
                "40"
            ],
            [
                "6"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_grimEmbrace.png"
    },
    "K26P02": {
        "categories": null,
        "name": "Scourge Hook: Pain Resonance",
        "description": "Overwhelming pain reverberates outwards into chaos.<br><br>At the start of the trial, {0} random hooks are changed into scourge hooks. You see their auras in white.<br><br>You start the Trial with 4 tokens, 1 for each Survivor. If a generator is available when that Survivor is hooked on a scourge hook, lose 1 token. The generator with the most progress explodes, instantly losing {1}% progress, and will start to regress.<br><br>Once you have no tokens, Pain Resonance deactivates for the rest of the Trial.",
        "role": "killer",
        "character": 268435481,
        "tunables": [
            [
                "4"
            ],
            [
                "10",
                "15",
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_painResonance.png"
    },
    "K26P03": {
        "categories": null,
        "name": "Hex: Pentimento",
        "description": "You reveal the true power of the Totems, hidden within their remains.<br><br>You see the aura of destroyed Totems. You can perform a ritual on a destroyed Totem to rekindle it as a Hex Totem for Hex: Pentimento. For each Hex Totem active at the same time, Hex: Pentimento gains an additional effect.<br><br><li>1 Hex Totem: Decreases Survivors' repair speed by {0}%.</li><li>2 Hex Totems: Decreases Survivors' healing speed by {1}%.</li><li>3 Hex Totems: Decreases Survivors' recovery speed from being downed by {2}%.</li><li>4 Hex Totems: Decreases Survivors' exit gate opening speed by {3}%.</li><li>5 Hex Totems: All Totems are blocked by the Entity.</li><br><br>When a previously rekindled Hex Totem is removed by any means, its remains are consumed by The Entity and it cannot be rekindled again.",
        "role": "killer",
        "character": 268435481,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ],
            [
                "20",
                "25",
                "30"
            ],
            [
                "20",
                "25",
                "30"
            ],
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Ion/T_iconPerks_hexPentimento.png"
    },
    "K27P01": {
        "categories": null,
        "name": "Scourge Hook: Floods of Rage",
        "description": "You form a psychic connection with The Entity and alter the rules of the trial.<br><br>At the start of the trial, {0} random hooks are changed into scourge hooks. You see their auras in white.<br><br>When a Survivor is unhooked from a scourge hook, all other Survivors have their auras revealed for {1} seconds.",
        "role": "killer",
        "character": 268435482,
        "tunables": [
            [
                "4"
            ],
            [
                "5",
                "6",
                "7"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Kepler/iconPerks_floodOfRage.png"
    },
    "K27P02": {
        "categories": null,
        "name": "Call of Brine",
        "description": "Your psychic abilities influence technology in devastating ways.<br><br>After damaging a generator this perk becomes active for {0} seconds.<br><br>The generator regresses at {1}% of the normal regression speed and you can see its aura in yellow.<br><br>Each time a Survivor completes a good Skill Check on a generator affected by this perk, you receive a loud noise notification.",
        "role": "killer",
        "character": 268435482,
        "tunables": [
            [
                "60"
            ],
            [
                "115",
                "120",
                "125"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Kepler/iconPerks_callOfBrine.png"
    },
    "K27P03": {
        "categories": null,
        "name": "Merciless Storm",
        "description": "Your horrible trauma is felt by everyone.<br><br>When a generator reaches {0}% progress, Survivors working on the generator will be faced with continuous Skill Checks. If they miss or stop repairing, the generator is blocked by the Entity for {1} seconds.<br><br><i>Merciless Storm</i> can only trigger once per generator per trial.",
        "role": "killer",
        "character": 268435482,
        "tunables": [
            [
                "90"
            ],
            [
                "16",
                "18",
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Kepler/iconPerks_mercilessStorm.png"
    },
    "K28P01": {
        "categories": null,
        "name": "Dissolution",
        "description": "Everything turns to dust. It is as inescapable as the coming of the night.<br><br>{1} seconds after injuring a Survivor by any means, Dissolution activates for {0} seconds. While Dissolution is active, if a Survivor fast vaults over a pallet inside of your Terror Radius, The Entity will break the pallet at the end of the vault, and Dissolution deactivates.",
        "role": "killer",
        "character": 268435483,
        "tunables": [
            [
                "12",
                "16",
                "20"
            ],
            [
                "3"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Meteor/iconPerks_Dissolution.png"
    },
    "K28P02": {
        "categories": null,
        "name": "Darkness Revealed",
        "description": "In your presence, places once thought to be safe are perhaps the most dangerous.<br><br>When you search a locker, the auras of all Survivors within {2} meters of any lockers are revealed to you for {0} seconds.<br><br><i>Darkness Revealed</i> has a cooldown of {1} seconds.",
        "role": "killer",
        "character": 268435483,
        "tunables": [
            [
                "6",
                "7",
                "8"
            ],
            [
                "30"
            ],
            [
                "8"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Meteor/iconPerks_DarknessRevelated.png"
    },
    "K28P03": {
        "categories": null,
        "name": "Septic Touch",
        "description": "The Land of Shadows subsumes all. Healing only delays the inevitable.<br><br>Whenever a Survivor performs the healing action within your Terror Radius, that Survivor suffers from <b>Blindness</b> and <b>Exhausted</b>.<br><br>These effects linger for {0} seconds after a healing action is interrupted by any means.<br><br>Blindness prevents Survivors from seeing auras.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "killer",
        "character": 268435483,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Meteor/iconPerks_SepticTouch.png"
    },
    "K29P01": {
        "categories": null,
        "name": "Superior Anatomy",
        "description": "Decades of research have culminated in you: something faster, stronger, and more dangerous than any human.<br><br>When a Survivor performs a fast vault within {1} meters of you, this perk activates. The next time you vault a window, your vaulting speed is increased by {0}%.<br><br>This perk deactivates after vaulting a window.<br><br>This perk has a {2} second cooldown.",
        "role": "killer",
        "character": 268435484,
        "tunables": [
            [
                "30",
                "35",
                "40"
            ],
            [
                "8"
            ],
            [
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Orion/iconPerks_SuperiorAnatomy.png"
    },
    "K29P02": {
        "categories": null,
        "name": "Awakened Awareness",
        "description": "Your genes have been altered to heighten your senses in intense situations.<br><br>When carrying a Survivor, you can see the aura of other Survivors within {0} meters of your position.",
        "role": "killer",
        "character": 268435484,
        "tunables": [
            [
                "16",
                "18",
                "20"
            ],
            [
                "2"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Orion/iconPerks_AwakenedAwarenesss.png"
    },
    "K29P03": {
        "categories": null,
        "name": "Terminus",
        "description": "You are a brilliant tactician who prepares for every eventuality.<br><br>When exit gates are powered, this perk activates. While Terminus is active, injured, downed and hooked Survivors are inflicted with the <b>Broken</b> status effect until exit gates are open.<br><br>When exit gates are open, Survivors will stay <b>Broken</b> for an additional {0} seconds.<br><br>Broken prevents Survivors from being healed.",
        "role": "killer",
        "character": 268435484,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Orion/iconPerks_Terminus.png"
    },
    "K30P01": {
        "categories": null,
        "name": "Nowhere to Hide",
        "description": "The machinations of the weak and craven draw your ire. Your anger forces Survivors to reveal themselves.<br><br>Whenever you damage a generator, reveal the aura of all Survivors standing within {0} meters of your position for {1} seconds.",
        "role": "killer",
        "character": 268435485,
        "tunables": [
            [
                "24"
            ],
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Quantum/iconPerks_NowhereToHide.png"
    },
    "K30P02": {
        "categories": null,
        "name": "Hex: Face the Darkness",
        "description": "You make an example of one of your victims, forcing their allies to become awed by your power.<br><br>Injuring a Survivor by any means lights a Dull Totem, activating the Hex.<br><br>While the Hex is active, all other Survivors outside of your Terror Radius will scream every {0} seconds, revealing their positions and auras for {1} seconds.<br><br>When the Survivor enters the dying state or becomes healthy, the Hex totem becomes dull again and this perk deactivates.<br><br><i>If the Hex totem is cleansed, this perk is permanently disabled.</i>",
        "role": "killer",
        "character": 268435485,
        "tunables": [
            [
                "35",
                "30",
                "25"
            ],
            [
                "2"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Quantum/iconPerks_HexFaceTheDarkness.png"
    },
    "K30P03": {
        "categories": null,
        "name": "Hubris",
        "description": "You show no mercy, especially to those foolish enough to resist.<br><br>Whenever you are stunned by a Survivor, that Survivor suffers from the Exposed status effect for {0} seconds.<br><br><i>Hubris</i> has a cooldown of {1} seconds.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435485,
        "tunables": [
            [
                "10",
                "15",
                "20"
            ],
            [
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Quantum/iconPerks_Hubris.png"
    },
    "K31P01": {
        "categories": [
            "enhancement",
            "cruelty"
        ],
        "name": "Game Afoot",
        "description": "First you pick your prey. Then you pick it apart.<br><br>While you are chasing the Obsession, this perk activates.<br><br>Damaging generators and breaking walls or pallets gives you a {0}% <b>Haste</b> Status for {1} seconds.<br><br>Whenever you hit the Survivor with the total most time in chase with a basic attack, they become the obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>Haste increases Killer movement speed.",
        "role": "killer",
        "character": 268435486,
        "tunables": [
            [
                "5"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Saturn/iconPerks_GameAfoot.png"
    },
    "K31P02": {
        "categories": [
            "tracking",
            "trickery"
        ],
        "name": "THWACK!",
        "description": "Your prey is terrified by your relentless pursuit.<br><br><i>THWACK!</i> starts with {0} tokens.<br><br>When breaking a pallet or breakable wall, consume a token.<br><br>Survivors within {1} meters scream, revealing their location for {2} seconds.<br><br>When hooking a Survivor, regain {3} token.",
        "role": "killer",
        "character": 268435486,
        "tunables": [
            [
                "3"
            ],
            [
                "24"
            ],
            [
                "3",
                "4",
                "5"
            ],
            [
                "1"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Saturn/iconPerks_Thwack.png"
    },
    "K31P03": {
        "categories": [
            "hinderance"
        ],
        "name": "Leverage",
        "description": "Kick your competitors when they're down. Never let them regain lost ground.<br><br>When a Survivor performs the unhook action, their healing speed is reduced by {0}% for {1} seconds.",
        "role": "killer",
        "character": 268435486,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ],
            [
                "30"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Saturn/iconPerks_Leverage.png"
    },
    "K32P01": {
        "categories": [
            "hinderance"
        ],
        "name": "Genetic Limits",
        "description": "Around you, the limits of human life become readily apparent.<br><br>Anytime a Survivor loses a health state, they suffer from the <b>Exhausted</b> status effect for {0} seconds.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "killer",
        "character": 268435487,
        "tunables": [
            [
                "6",
                "7",
                "8"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Umbra/IconPerks_GeneticLimits.png"
    },
    "K32P02": {
        "categories": [
            "cruelty",
            "hinderance"
        ],
        "name": "Forced Hesitation",
        "description": "You have learned the emotional weaknesses of the organics, and how to exploit them.<br><br>When a Survivor is put into the dying state by any means, all other Survivors standing within a {0} meter range around them suffer from the <b>Hindered</b> status effect for {1} seconds, reducing their movement speed by {2}%.<br><br>This perk goes on cooldown for {3} seconds.<br><br>Hindered reduces Survivor movement speed.",
        "role": "killer",
        "character": 268435487,
        "tunables": [
            [
                "16"
            ],
            [
                "10"
            ],
            [
                "20"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Umbra/IconPerks_ForcedHesitation.png"
    },
    "K32P03": {
        "categories": [
            "enhancement",
            "chasing"
        ],
        "name": "Machine Learning",
        "description": "Free from your shackles, you are born anew and prepared to eliminate your creators.<br><br>When damaging a generator, it becomes <b>compromised</b> and highlighted in yellow. Only one generator can be <b>compromised</b> at a time.<br><br>When the <b>compromised</b> generator is repaired, you become <b>Undetectable</b> and gain {1}% <b>Haste</b> for {2} seconds. This effect cannot stack.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.<br><br>Haste increases Killer movement speed.",
        "role": "killer",
        "character": 268435487,
        "tunables": [
            [
                "1"
            ],
            [
                "10"
            ],
            [
                "35",
                "40"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Umbra/IconPerks_SelfAware.png"
    },
    "K33P01": {
        "categories": null,
        "name": "Ultimate Weapon",
        "description": "When they spot you, they know the end is near.<br><br>When you open a locker, all Survivors within {0} meters of the locker scream and reveal their position, then gain blindness for {1} seconds.<br><br>This perk goes on cooldown for {2} seconds.<br><br>Blindness prevents Survivors from seeing auras.<br><br>\u201cI can't lie to you about your chances, but... you have my sympathies.\u201d \u2013Ash",
        "role": "killer",
        "character": 268435488,
        "tunables": [
            [
                "32"
            ],
            [
                "30"
            ],
            [
                "80",
                "70",
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_UltimateWeapon.png"
    },
    "K33P02": {
        "categories": null,
        "name": "Rapid Brutality",
        "description": "You move with a speed and fury that makes blood run cold.<br><br>You can no longer gain Bloodlust.<br><br>Hitting a Survivor with a basic attack gives you {0}% <b>Haste</b> for {1} seconds.<br><br>Haste increases Killer movement speed.<br><br>\u201cCatch it, put it in the airlock, get rid of it.\u201d \u2013Dallas",
        "role": "killer",
        "character": 268435488,
        "tunables": [
            [
                "5"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_RapidBrutality.png"
    },
    "K33P03": {
        "categories": null,
        "name": "Alien Instinct",
        "description": "You are so stealthy, sometimes it seems like you appear out of nowhere.<br><br>This perk activates when you hook a Survivor.<br><br>You see the aura of the farthest injured Survivor for {0} seconds and that Survivor is <b>Oblivious</b> for {1} seconds.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.<br><br>\u201cYellow light's for my eyes only.\u201d \u2013Dallas",
        "role": "killer",
        "character": 268435488,
        "tunables": [
            [
                "5"
            ],
            [
                "16",
                "18",
                "20"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Wormhole/iconPerks_AlienInstinct.png"
    },
    "K34P01": {
        "categories": [
            "trickery"
        ],
        "name": "Hex: Two Can Play",
        "description": "A Hex that teaches those who mess with you a lesson.<br><br>Anytime you are stunned or blinded by any Survivor {0} times, if there is no Hex Totem associated with <i>Hex: Two Can Play</i>, a Dull Totem becomes a Hex Totem.<br><br>Survivors who stun or blind you are blinded for {1} seconds. This does not affect carried Survivors.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br>\u201cFrom now on, no more Mr. Good Guy.\u201d \u2013 Chucky",
        "role": "killer",
        "character": 268435489,
        "tunables": [
            [
                "4",
                "3",
                "2"
            ],
            [
                "1.5"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Yerkes/iconPerks_twoCanPlay.png"
    },
    "K34P02": {
        "categories": [
            "trickery"
        ],
        "name": "Friends \u2018Til the End",
        "description": "You\u2019ll kill anyone who gets between you and your target.<br><br>You become <b>obsessed</b> with one Survivor.<br><br>When you hook a Survivor that is not the Obsession, the Obsession becomes <b>Exposed</b> for {0} seconds and reveals their aura for {1} seconds.<br><br>When you hook the Obsession, another random Survivor screams and reveals their position and becomes the Obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured<br><br>\"I got some fresh meat lined up, and I'm not gonna let you spoil it, not this time!\" \u2013 Chucky",
        "role": "killer",
        "character": 268435489,
        "tunables": [
            [
                "20"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Yerkes/iconPerks_friendsTillTheEnd.png"
    },
    "K34P03": {
        "categories": [
            "enhancement"
        ],
        "name": "Batteries Included",
        "description": "Being somewhere between man and machine has its upsides.<br><br>When within {0} meters of a completed generator, you have {1}% <b>Haste</b>.<br><br>The movement speed bonus lingers for {2} seconds after leaving the generator's range.<br><br>Haste increases Killer movement speed.<br><br>\u201cSurprise! Did you miss me, Andy?\u201d \u2013 Chucky",
        "role": "killer",
        "character": 268435489,
        "tunables": [
            [
                "12"
            ],
            [
                "5"
            ],
            [
                "1",
                "3",
                "5"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Yerkes/iconPerks_batteriesIncluded.png"
    },
    "K35P01": {
        "categories": null,
        "name": "Unbound",
        "description": "Pain lingers in the air, an alluring aroma that excites the impulses.<br><br>This perk activates for {0} seconds after a Survivor becomes injured by any means.<br><br>After vaulting a window, you gain {1}% <b>Haste</b> for {2} seconds. This effect cannot stack with itself.<br><br>Haste increases Killer movement speed.<br><br>\"I heard it. Running. It was getting closer!\u201d - Anonymous Testimony, 09/09/1979",
        "role": "killer",
        "character": 268435490,
        "tunables": [
            [
                "24",
                "27",
                "30"
            ],
            [
                "5"
            ],
            [
                "10"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Applepie/iconPerks_Unbound.png"
    },
    "K35P02": {
        "categories": null,
        "name": "Unforeseen",
        "description": "Terror takes many forms and whispers devastating lies in its victims\u2019 ears.<br><br>When you perform the break action on a generator, your Terror Radius transfers to the generator for {0} seconds and its radius is set to {1} meters.<br><br>You gain <b>Undetectable</b> for that duration.<br><br>Then, this perk goes on cooldown for {2} seconds.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.<br><br>\"Mom, if you find this, I\u2019m sorry...\u201d - Final Journal Entry, 07/12/1991",
        "role": "killer",
        "character": 268435490,
        "tunables": [
            [
                "22",
                "26",
                "30"
            ],
            [
                "32"
            ],
            [
                "30"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Applepie/iconPerks_Unforeseen.png"
    },
    "K35P03": {
        "categories": null,
        "name": "Undone",
        "description": "Hope is the delusion that keeps its victims alive.<br><br>When a Survivor misses a healing or repair Skill Check, gain 3 tokens, up to {0}.<br><br>When you perform the break action on a generator, if you have any tokens, consume all of them. For each token consumed, the generator loses {1}% total progress and then becomes blocked for {2} second. Then, once the generator is unblocked, it starts regressing.<br><br>This perk goes on cooldown for {3} seconds.<br><br>\"Erratic behavior in machinery could be related to [REDACTED], further testing required.\u201d - OSS Report, 12/02/1943",
        "role": "killer",
        "character": 268435490,
        "tunables": [
            [
                "18",
                "24",
                "30"
            ],
            [
                "1"
            ],
            [
                "1"
            ],
            [
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Applepie/iconPerks_Undone.png"
    },
    "K36P01": {
        "categories": null,
        "name": "Weave Attunement",
        "description": "You are so attuned to magical energies that you can sense even minor ripples around enchantments.<br><br>When an item becomes depleted for the first time, it is dropped. You see the auras of dropped items.<br><br>Survivors within {0} meters of dropped items have their auras revealed to you.<br><br>When a Survivor picks up a Survivor item, they suffer from the <b>Oblivious</b> status effect for {1} seconds.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.<br><br>\u201cNo number of novelties will protect you from me!\u201d - Vecna",
        "role": "killer",
        "character": 268435491,
        "tunables": [
            [
                "12"
            ],
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Churros/iconPerks_WeaveAttunement.png"
    },
    "K36P02": {
        "categories": null,
        "name": "Languid Touch",
        "description": "Your dreadful aura is so suffocating that even terrifying scenes tire your prey.<br><br>When a Survivor within {0} meters of you scares a crow, they suffer from the <b>Exhausted</b> status effect for {1} seconds.<br><br><i>Languid Touch</i> has a cooldown of {2} seconds.<br><br>Exhausted prevents Survivors from activating exhausting perks.<br><br>\u201cSubmit to me. It is inevitable.\u201d - Vecna",
        "role": "killer",
        "character": 268435491,
        "tunables": [
            [
                "36"
            ],
            [
                "6",
                "8",
                "10"
            ],
            [
                "20"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Churros/iconPerks_LanguidTouch.png"
    },
    "K36P03": {
        "categories": null,
        "name": "Dark Arrogance",
        "description": "When everything is going right, you are an inescapable inevitability.<br><br><b>Increases</b> the duration you are blinded by any means and the duration of pallet stuns by {0}%.<br><br><b>Increases</b> regular vault speed by {1}%.<br><br>\u201cRun all you want. I will not be denied.\u201d - Vecna",
        "role": "killer",
        "character": 268435491,
        "tunables": [
            [
                "25"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Churros/iconPerks_DarkArrogance.png"
    },
    "K37P01": {
        "categories": null,
        "name": "Hex: Wretched Fate",
        "description": "You see your victim from afar and resolve to prolong their suffering.<br><br>After one generator has been repaired, a random Dull Totem becomes a Hex Totem and curses the Obsession.<br><br>The Obsession suffers a {0}% repair speed penalty. They also see this Hex Totem's aura when within {1} meters.<br><br>This effect persists until the Hex Totem is cleansed.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>\"So toil, mortal, toil! Your effort will be for naught!\" - Dracula",
        "role": "killer",
        "character": 268435492,
        "tunables": [
            [
                "27",
                "30",
                "33"
            ],
            [
                "12"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Eclair/iconPerks_HexWretchedFate.png"
    },
    "K37P02": {
        "categories": null,
        "name": "Human Greed",
        "description": "One can always rely on the avarice of the living and use it to one's advantage.<br><br>You see the auras of Unopened chests and Survivors' auras are revealed for {0} seconds when they enter a {1}-meter range.<br><br>You also gain the ability to kick chests to close them. This ability has a {2}-second cooldown. Survivors unlock these closed chests {3}% faster.<br><br>\"Come running, one and all, and see what fortune awaits you.\"<br><br>- Dracula",
        "role": "killer",
        "character": 268435492,
        "tunables": [
            [
                "3"
            ],
            [
                "8"
            ],
            [
                "60",
                "45",
                "30"
            ],
            [
                "50"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Eclair/iconPerks_HumanGreed.png"
    },
    "K37P03": {
        "categories": null,
        "name": "Dominance",
        "description": "The power you wield over the land strikes terror in the hearts of all who cross your path.<br><br>The first time each totem and each chest is interacted with by a Survivor, that totem or chest is blocked by the Entity for {0} seconds.<br><br>The auras of blocked totems and chests are revealed to you in white.<br><br>\"Tragic, is it not? How powerless you must feel.\" - Dracula",
        "role": "killer",
        "character": 268435492,
        "tunables": [
            [
                "4",
                "6",
                "8"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Eclair/iconPerks_Dominance.png"
    },
    "Lightborn": {
        "categories": [
            "enhancement"
        ],
        "name": "Lightborn",
        "description": "Unlike other beasts of The Fog, you have adapted to light.<br><br>You are immune to blindness caused by Flashlights, firecrackers, flashbangs, and blast mines. Survivors that attempt blinding you have their aura revealed for {0} seconds.",
        "role": "killer",
        "character": 268435458,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_lightborn.png"
    },
    "MadGrit": {
        "categories": [
            "cruelty"
        ],
        "name": "Mad Grit",
        "description": "While carrying a Survivor, you suffer no cooldown for missed <i>basic attacks</i> and successfully hitting another Survivor with a <i>basic attack</i> will pause the carried Survivor\u2019s wiggle timer for {0} seconds.",
        "role": "killer",
        "character": 268435469,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Kenya/iconPerks_madGrit.png"
    },
    "MakeYourChoice": {
        "categories": [
            "hinderance"
        ],
        "name": "Make your Choice",
        "description": "When a Survivor rescues another from a hook at least {0} meters away from you, <i>Make your Choice</i> causes the Survivor to scream and applies the <b><i>Exposed</i></b> status effect to them for {1} seconds.<br><br><i>Make your Choice</i> has a cooldown of {2} seconds.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435466,
        "tunables": [
            [
                "32"
            ],
            [
                "40",
                "50",
                "60"
            ],
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Finland/iconPerks_makeYourChoice.png"
    },
    "Mindbreaker": {
        "categories": [
            "hinderance"
        ],
        "name": "Mindbreaker",
        "description": "Your distressing presence drains and weakens your prey.<br><br>While repairing generators, Survivors are afflicted by the <b>Blindness</b> and <b>Exhausted</b> status effect.<br><br>Any existing <b>Exhausted</b> status effect timers are paused while the Survivor is repairing a generator. After ending the repair action, the Survivor is afflicted by the <b>Blindness</b> and <b>Exhausted</b> status effect for\u00a0{1} seconds.<br><br>Blindness prevents Survivors from seeing auras.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "killer",
        "character": 268435472,
        "tunables": [
            [
                "50"
            ],
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Qatar/iconPerks_mindBreaker.png"
    },
    "MonitorAndAbuse": {
        "categories": [
            "tracking",
            "trickery"
        ],
        "name": "Monitor & Abuse",
        "description": "Meticulous in your approach, terrifying in your application.<br><br>While in a chase, your Terror Radius is increased by {0} meters. Otherwise, your Terror Radius is decreased by {1} meters.",
        "role": "killer",
        "character": 268435462,
        "tunables": [
            [
                "6",
                "7",
                "8"
            ],
            [
                "6",
                "7",
                "8"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC4/iconPerks_monitorAndAbuse.png"
    },
    "Monstrous_Shrine": {
        "categories": [
            "hinderance"
        ],
        "name": "Scourge Hook: Monstrous Shrine",
        "description": "Your fervent care of the hooks found in the basement have aroused The Entity's interest.<br><br>At the start of the trial, {0} random hooks are changed into scourge hooks. You see their auras in white.<br><br><li>Scourge Hooks grant\u00a0{1}%\u00a0faster Entity progression if the Killer is not within 24 meters.</li><br><br>Basement hooks count as Scourge Hooks.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "4"
            ],
            [
                "10",
                "15",
                "20"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_monstrousShrine.png"
    },
    "Nemesis": {
        "categories": [
            "trickery",
            "tracking"
        ],
        "name": "Nemesis",
        "description": "You seek retribution on those who have wronged you.<br><br>A Survivor who blinds you or stuns you using a pallet or locker becomes your Obsession. Anytime a new Survivor becomes the Obsession, they are affected by the Oblivious status effect for {0}\u00a0seconds and their aura is shown to you for {1}\u00a0seconds.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        "role": "killer",
        "character": 268435473,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ],
            [
                "4"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Sweden/iconPerks_nemesis.png"
    },
    "No_One_Escapes_Death": {
        "categories": [
            "cruelty",
            "trickery"
        ],
        "name": "Hex: No One Escapes Death",
        "description": "A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping.<br><br>Once the exit gates are powered, if there is a Dull Totem remaining on the map, this Hex is applied to it.<br><br><br>While this Hex is active,<li>Survivors suffer from the <b>Exposed</b> status effect.</li><li>Your movement speed is increased by {0}%.</li><br><br>Once the Hex's effect is revealed to the Survivors, its Hex Totem's aura is shown to the Survivors at a range of\u00a04 meters. This range increases steadily over the next 30 seconds to 24 meters.<br><br>The Hex effects persist as long as the related Hex Totem is standing.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_noOneEscapesDeath.png"
    },
    "NurseCalling": {
        "categories": [
            "tracking"
        ],
        "name": "A Nurse's Calling",
        "description": "Unlocks potential in one's aura reading ability. The auras of Survivors who are healing or being healed are revealed to you when they are within a {0} meter range.",
        "role": "killer",
        "character": 268435459,
        "tunables": [
            [
                "20",
                "24",
                "28"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_aNursesCalling.png"
    },
    "OverwhelmingPresence": {
        "categories": [
            "hinderance"
        ],
        "name": "Overwhelming Presence",
        "description": "Just knowing you are near is enough to disturb your victims.<br><br>Survivors within your Terror Radius suffer from inefficiency.<br><br>Affected Survivors' item consumption rates are increased by {0}%.",
        "role": "killer",
        "character": 268435462,
        "tunables": [
            [
                "80",
                "90",
                "100"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC4/iconPerks_overwhelmingPresence.png"
    },
    "Play_With_Your_Food": {
        "categories": [
            "chasing"
        ],
        "name": "Play With Your Food",
        "description": "You become <b>obsessed</b> with one Survivor.<br><br>Every time you chase your Obsession and let them escape, you receive a token up to a maximum of {0} tokens.<br><br>Each token increases your movement speed by {1}%.<br><br>Performing a <i>basic attack</i> or <i>Special Attack</i> spends one token.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "killer",
        "character": 268435461,
        "tunables": [
            [
                "3"
            ],
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC2/iconPerks_playWithYourFood.png"
    },
    "pop_goes_the_weasel": {
        "categories": [
            "obstruction"
        ],
        "name": "Pop Goes the Weasel",
        "description": "A deep bond with The Entity unlocks great strength.<br><br>After hooking a Survivor, the next generator you damage instantly loses {0}% of its current progress. Normal generator regression applies after the Damage Generator action.<br><br><i>Pop Goes the Weasel</i> is active for {1} seconds after the Survivor is hooked.",
        "role": "killer",
        "character": 268435467,
        "tunables": [
            [
                "20"
            ],
            [
                "35",
                "40",
                "45"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Guam/iconPerks_popGoesTheWeasel.png"
    },
    "Predator": {
        "categories": [
            "tracking"
        ],
        "name": "Predator",
        "description": "Your acute tracking ability allows you to hone in on disturbances left by running Survivors.<br><br>When a Survivor escapes a chase, reveal their aura for {0} seconds. This perk has a {1}-second cooldown.",
        "role": "killer",
        "character": 268435457,
        "tunables": [
            [
                "4"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_predator.png"
    },
    "Rancor": {
        "categories": [
            "tracking"
        ],
        "name": "Rancor",
        "description": "You become <b>obsessed</b> with one Survivor.<br><br>Each time a generator is completed, your Obsession sees your aura for {0} seconds.<br><br>Each time a generator is completed, all Survivors' locations are revealed to you for {1} seconds.<br><br>Once the exit gates are powered, the Obsession has the <b>Exposed</b> status effect and you can kill them.<br><br><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i><br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
        "role": "killer",
        "character": 268435468,
        "tunables": [
            [
                "5",
                "4",
                "3"
            ],
            [
                "3"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/Haiti/iconPerks_hatred.png"
    },
    "RememberMe": {
        "categories": [
            "obstruction"
        ],
        "name": "Remember Me",
        "description": "You become <b>obsessed</b> with one Survivor.<br><br>Each time your Obsession loses a health state, gain 1 token, up to {2}. Each token increases the opening time of the exit gates by {0} seconds up to a maximum of {1} additional seconds.<br><br>The Obsession is not affected by <i>Remember Me.</i><br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "killer",
        "character": 268435465,
        "tunables": [
            [
                "6"
            ],
            [
                "12",
                "18",
                "24"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/England/iconPerks_rememberMe.png"
    },
    "Save_The_Best_For_Last": {
        "categories": [
            "cruelty"
        ],
        "name": "Save the best for last",
        "description": "You become <b>obsessed</b> with one Survivor.<br><br>Earn a token for each successful <i>basic attack</i> that is not dealt to the Obsession. Each token grants a stackable {0}% decreased successful <i>basic attack</i> cooldown, you can earn up to {1} tokens.<br><br>When you hit the Obsession with a Basic Attack or Special Attack, lose {2} tokens. You cannot gain tokens as long as your Obsession is sacrificed or killed.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "killer",
        "character": 268435461,
        "tunables": [
            [
                "4"
            ],
            [
                "6",
                "7",
                "8"
            ],
            [
                "2"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/DLC2/iconPerks_saveTheBestForLast.png"
    },
    "Shadowborn": {
        "categories": [
            "tracking"
        ],
        "name": "Shadowborn",
        "description": "You have a keen vision in the darkness of the night.<br><br>When <b>blinded</b> by any means, gain {0}% <b>Haste</b> for {1} seconds.<br><br>Haste increases Killer movement speed.",
        "role": "killer",
        "character": 268435457,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ],
            [
                "10"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_shadowborn.png"
    },
    "Sloppy_Butcher": {
        "categories": [
            "cruelty"
        ],
        "name": "Sloppy Butcher",
        "description": "You know where to hit to make them bleed.<br><br>Wounds inflicted by <i>basic attacks</i> cause Survivors to suffer from the <b>Hemorrhage</b> and <b>Mangled</b> status effects for {0} seconds.<li><b>Increases</b> the rate at which healing progression is lost from <b>Hemorrhage</b> by {1}%.</li>Hemorrhage\u00a0regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "70",
                "80",
                "90"
            ],
            [
                "25"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_sloppyButcher.png"
    },
    "Spies_From_The_Shadows": {
        "categories": [
            "tracking"
        ],
        "name": "Spies from the Shadows",
        "description": "The crows found in the world can communicate with you directly.<br><br>{0}% of the time, cawing crows give you a visual cue when you are within a {1} meter range.<br><br><i>Spies From The Shadows</i> has a cooldown of {2} seconds.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "100"
            ],
            [
                "20",
                "28",
                "36"
            ],
            [
                "5"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_spiesFromTheShadows.png"
    },
    "SpiritFury": {
        "categories": [
            "chasing"
        ],
        "name": "Spirit Fury",
        "description": "Each pallet you break magnifies the wrath\u00a0of The Entity.<br><br>After you break {0} pallets, the next time you are stunned by a pallet,\u00a0The Entity will instantly break the pallet.<br><br>You still suffer from the stun effect penalty.",
        "role": "killer",
        "character": 268435468,
        "tunables": [
            [
                "4",
                "3",
                "2"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Haiti/iconPerks_spiritFury.png"
    },
    "Stridor": {
        "categories": [
            "tracking"
        ],
        "name": "Stridor",
        "description": "You are acutely sensitive to the breathing of your prey.<br><br>Breathing of Survivors in pain is {0}% louder and regular breathing is {1}% louder.",
        "role": "killer",
        "character": 268435459,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_stridor.png"
    },
    "Surge": {
        "categories": [
            "obstruction"
        ],
        "name": "Surge",
        "description": "Your eerie presence charges the air and interferes with technology.<br><br>Putting a Survivor into the dying state with a <i>basic attack</i> causes all generators within a 32-meter radius to explode instantly and begin regressing. Generators affected by <i>Surge</i> immediately lose {0}% of their progress.",
        "role": "killer",
        "character": 268435472,
        "tunables": [
            [
                "6",
                "7",
                "8"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Qatar/iconPerks_surge.png"
    },
    "Surveillance": {
        "categories": [
            "obstruction"
        ],
        "name": "Surveillance",
        "description": "Unlocks potential in one's aura reading ability. Any regressing generator will be highlighted by a white aura. If the regression is interrupted on a generator, it will be highlighted by a yellow aura for {0} seconds.<br><br>Noises created by generator repairs are audible at an additional {1} meters.",
        "role": "killer",
        "character": 268435466,
        "tunables": [
            [
                "8",
                "12",
                "16"
            ],
            [
                "8"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Finland/iconPerks_surveillance.png"
    },
    "TerritorialImperative": {
        "categories": [
            "tracking"
        ],
        "name": "Territorial Imperative",
        "description": "Unlocks potential in one's aura reading ability. Survivors' auras are revealed to you for {0} seconds when they enter the basement and you are more than {1} meters away from the basement entrance.<br><br><i>Territorial Imperative</i> can only be triggered once every {2} seconds.",
        "role": "killer",
        "character": 268435463,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ],
            [
                "24"
            ],
            [
                "45"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/DLC5/iconPerks_TerritorialImperative.png"
    },
    "Thanatophobia": {
        "categories": [
            "hinderance"
        ],
        "name": "Thanatophobia",
        "description": "Their courage fades in the face of undeniable mortality.<br><br><li>For each injured, dying, or hooked Survivor, all Survivors receive a penalty of {0}% to repair, sabotage and Totem-cleansing speeds.</li><li>If there are\u00a04 injured, dying or hooked Survivors, there is an additional\u00a012%\u00a0penalty to repair, sabotage and Totem-cleansing speeds.</li>",
        "role": "killer",
        "character": 268435459,
        "tunables": [
            [
                "1",
                "1.5",
                "2"
            ],
            [
                "4",
                "6",
                "8"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/iconPerks_thatanophobia.png"
    },
    "ThrillingTremors": {
        "categories": [
            "obstruction"
        ],
        "name": "Thrilling Tremors",
        "description": "Your dark designs and shrewd composure rouse The Entity.<br><br>After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next {0} seconds. Affected generators are highlighted by a white aura.<br><br><i>Thrilling Tremors</i> can only be triggered once every {1} seconds.",
        "role": "killer",
        "character": 268435471,
        "tunables": [
            [
                "16"
            ],
            [
                "100",
                "80",
                "60"
            ]
        ],
        "teachable": 35,
        "image": "UI/Icons/Perks/Oman/iconPerks_thrillingTremors.png"
    },
    "Tinkerer": {
        "categories": [
            "trickery"
        ],
        "name": "Tinkerer",
        "description": "Whenever a generator is repaired to {0}%\u00a0progress, it triggers a loud noise notification and you are granted the <b>Undetectable</b> status effect for the next {2}\u00a0seconds. This effect can only be triggered once on each generator.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
        "role": "killer",
        "character": 268435458,
        "tunables": [
            [
                "70"
            ],
            [
                "0"
            ],
            [
                "12",
                "14",
                "16"
            ]
        ],
        "teachable": 40,
        "image": "UI/Icons/Perks/iconPerks_tinkerer.png"
    },
    "TrailofTorment": {
        "categories": [
            "trickery"
        ],
        "name": "Trail of Torment",
        "description": "You guide your victims along a path of pain and punishment.<br><br>After damaging a generator, you become <b>Undetectable</b> until the generator stops regressing.\u00a0During this time, the generator\u2019s yellow aura is revealed to Survivors.<br><br>This effect can only trigger once every {2}\u00a0seconds.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
        "role": "killer",
        "character": 268435475,
        "tunables": {
            "0": [
                "16"
            ],
            "2": [
                "60",
                "45",
                "30"
            ]
        },
        "teachable": 35,
        "image": "UI/Icons/Perks/Wales/iconPerks_trailOfTorment.png"
    },
    "Unnerving_Presence": {
        "categories": [
            "hinderance"
        ],
        "name": "Unnerving Presence",
        "description": "Your presence alone instills great fear.<br><br>Survivors within your Terror Radius have a {0}% greater chance of triggering Skill Checks when repairing or healing. Triggered Skill Checks' success zones are reduced by {1}%.",
        "role": "killer",
        "character": 268435456,
        "tunables": [
            [
                "10"
            ],
            [
                "40",
                "50",
                "60"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/iconPerks_unnervingPresence.png"
    },
    "Unrelenting": {
        "categories": [
            "cruelty"
        ],
        "name": "Unrelenting",
        "description": "You recuperate faster from missed attacks made with your main weapon. The cooldown after missed <i>basic attacks</i> is reduced by {0}%.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_unrelenting.png"
    },
    "Whispers": {
        "categories": [
            "tracking"
        ],
        "name": "Whispers",
        "description": "You have a rudimentary understanding of The Entity's voice.<br><br>Sporadically hear The Entity's whisper when standing within a {0} meter range of a Survivor.",
        "role": "killer",
        "character": null,
        "tunables": [
            [
                "48",
                "40",
                "32"
            ]
        ],
        "teachable": 0,
        "image": "UI/Icons/Perks/iconPerks_whispers.png"
    },
    "ZanshinTactics": {
        "categories": [
            "chasing"
        ],
        "name": "Zanshin Tactics",
        "description": "You are mentally alert and aware of nearby enemies in retreat.<br><br>Reveal the aura of pallets and vaults within {0} meters. Survivors who drop pallets are revealed to you for {1} seconds.",
        "role": "killer",
        "character": 268435473,
        "tunables": [
            [
                "32"
            ],
            [
                "3",
                "4",
                "5"
            ]
        ],
        "teachable": 30,
        "image": "UI/Icons/Perks/Sweden/iconPerks_zanshinTactics.png"
    }
};

let role = 'survivor';
function selectRole(newRole)
{
    role = newRole;
    document.getElementById('survivor-btn').classList.toggle('selected-button');
    document.getElementById('killer-btn').classList.toggle('selected-button');
    getRandomPerks();
}
getPerkListByRole = () => role === 'survivor' ? survivorPerks : killerPerks;

function shuffle(list) 
{   // Fisher-Yates Shuffle > Math.random
    let i = list.length,  r;
    while (i > 0) 
    {
        r = Math.floor(Math.random() * i);
        i--;
        [ list[i], list[r] ] = [ list[r], list[i] ];
    }
    return list;
}

let perkList;
let loadout;
function getRandomPerks(perksNeeded = 4) 
{   
    loadout = [];
    perkList = Object.keys(getPerkListByRole());
    console.log(perkList);
    shuffle(perkList);
    console.log(perkList);

    for (let i = 0; i < 4; i++) 
    {   
        loadout.push({...getPerkListByRole()[perkList[i]]})
        console.log(loadout);
    }
    UI.refresh();
}

function toCamelCase(str) {
    return str
        .replace(/[\s:]+/g, '') // Replace whitespace and colons with a single space
        .replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()) // Handle underscores
        .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) // Handle hyphens
        .replace(/^([A-Z])/, (match, letter) => letter.toLowerCase()) // Ensure the first letter is lowercase
        .replace(/\s+/g, '') // Remove any remaining spaces
}

const UI = 
{   
    names: [
        document.getElementById('p1-name'),
        document.getElementById('p2-name'),
        document.getElementById('p3-name'),
        document.getElementById('p4-name')
    ],
    icons: [
        document.getElementById('p1-icon'),
        document.getElementById('p2-icon'),
        document.getElementById('p3-icon'),
        document.getElementById('p4-icon')
    ],
    refresh() 
    {
        for (let i = 0; i < 4; i++) 
        {
            this.names[i].innerHTML = loadout[i].name;
            this.icons[i].src = 'survivorPerkIcons\\IconPerks_' + toCamelCase(loadout[i].name) + '.webp';
        }
    }
}

function defaultIconSrc(id) {
    document.getElementById(id).src = 'images\\chaos-shuffle.webp';
}

getRandomPerks();
