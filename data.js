var APP_DATA = {
  "scenes": [
    {
      "id": "0-101-waiting-area",
      "name": "1.01 Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.880747867040734,
        "pitch": 0.269424832547168,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.22543680597771498,
          "pitch": 0.22539518335328879,
          "rotation": 0,
          "target": "1-101-waiting-area-2"
        },
        {
          "yaw": 2.9828350780907122,
          "pitch": 0.13671028900904325,
          "rotation": 0,
          "target": "2-102-reception"
        },
        {
          "yaw": -2.6393246832867945,
          "pitch": 0.15246127823026434,
          "rotation": 0,
          "target": "3-out-of-scope-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-101-waiting-area-2",
      "name": "1.01 Waiting Area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7466973843314939,
        "pitch": 0.11123571282371714,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.6915903669392645,
          "pitch": 0.23651934170529465,
          "rotation": 0,
          "target": "0-101-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-102-reception",
      "name": "1.02 Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.4186337572377674,
        "pitch": 0.1755975732926025,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.8237666762493223,
          "pitch": 0.11762462076788793,
          "rotation": 0,
          "target": "0-101-waiting-area"
        },
        {
          "yaw": 3.133466572538522,
          "pitch": 0.12280619635079759,
          "rotation": 0,
          "target": "5-c001-corridor-1"
        },
        {
          "yaw": 1.4115034140248603,
          "pitch": 0.20350026916258201,
          "rotation": 0,
          "target": "3-out-of-scope-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-out-of-scope-corridor",
      "name": "Out of Scope Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.3334116043368187,
        "pitch": 0.12004178009205368,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.5528554811903579,
          "pitch": 0.10985921771225193,
          "rotation": 0,
          "target": "2-102-reception"
        },
        {
          "yaw": -1.0858951911142682,
          "pitch": 0.010950755319022676,
          "rotation": 0,
          "target": "4-103-linen-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-103-linen-store",
      "name": "1.03 Linen Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9132024555487526,
          "pitch": 0.3016118581824827,
          "rotation": 0,
          "target": "3-out-of-scope-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-c001-corridor-1",
      "name": "C0.01 Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0708621322238443,
        "pitch": 0.22906209784299136,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.1011310523038986,
          "pitch": 0.11462020619203273,
          "rotation": 0,
          "target": "0-101-waiting-area"
        },
        {
          "yaw": 1.5481493362076604,
          "pitch": 0.13540475527539364,
          "rotation": 0,
          "target": "2-102-reception"
        },
        {
          "yaw": 1.9201528244523205,
          "pitch": 0.16066877145114944,
          "rotation": 0,
          "target": "6-104-wc-lobby"
        },
        {
          "yaw": 0.7696626494219228,
          "pitch": 0.110024898749991,
          "rotation": 0,
          "target": "9-110-staff-wc-lobby"
        },
        {
          "yaw": -0.5462122794301791,
          "pitch": 0.19685810884220345,
          "rotation": 0,
          "target": "9-110-staff-wc-lobby"
        },
        {
          "yaw": -2.071617735509765,
          "pitch": 0.2315905831775673,
          "rotation": 0,
          "target": "15-c001-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-104-wc-lobby",
      "name": "1.04 WC Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.884574630489702,
        "pitch": 0.19983320681665084,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.884574630489702,
          "pitch": 0.19983320681665084,
          "rotation": 0,
          "target": "7-105-visitor-acc-wc"
        },
        {
          "yaw": -2.2189194940974204,
          "pitch": 0.19431981522778585,
          "rotation": 0,
          "target": "8-106-ambulant-wc"
        },
        {
          "yaw": -1.110271771243859,
          "pitch": 0.2371451797460491,
          "rotation": 0,
          "target": "5-c001-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-105-visitor-acc-wc",
      "name": "1.05 Visitor Acc. WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.060532003595224,
        "pitch": 0.3059968302257676,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.9087336675066915,
          "pitch": 0.2627847650787398,
          "rotation": 0,
          "target": "6-104-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-106-ambulant-wc",
      "name": "1.06 Ambulant WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.6833398387355576,
        "pitch": 0.23485622813452167,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.2588744998683854,
          "pitch": 0.18632039771317466,
          "rotation": 0,
          "target": "6-104-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-110-staff-wc-lobby",
      "name": "1.10 Staff WC Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.029922737579531,
        "pitch": 0.14036773703497474,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.9614574656373858,
          "pitch": 0.19563400485157523,
          "rotation": 0,
          "target": "10-111-staff-wc"
        },
        {
          "yaw": -0.12230429124159592,
          "pitch": 0.20951036711679727,
          "rotation": 0,
          "target": "11-112-staff-wc"
        },
        {
          "yaw": -1.0800002154043327,
          "pitch": 0.27096781337642106,
          "rotation": 0,
          "target": "5-c001-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-111-staff-wc",
      "name": "1.11 Staff WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.2378189971988576,
        "pitch": 0.29495501607210173,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.7674185706326799,
          "pitch": 0.26505520690608186,
          "rotation": 0,
          "target": "9-110-staff-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-112-staff-wc",
      "name": "1.12 Staff WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.546606349951187,
        "pitch": 0.3841712171942113,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.4888890919139612,
          "pitch": 0.26072414170087654,
          "rotation": 0,
          "target": "9-110-staff-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-113-staff-wc-lobby",
      "name": "1.13 Staff WC Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.835857533663427,
        "pitch": 0.1300083881241001,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.2913735519466965,
          "pitch": 0.16011452710735874,
          "rotation": 0,
          "target": "14-115-staff-wc"
        },
        {
          "yaw": 2.780081776294568,
          "pitch": 0.30149029496420887,
          "rotation": 0,
          "target": "13-114-staff-wc"
        },
        {
          "yaw": -0.4132903424964134,
          "pitch": 0.20879763120677453,
          "rotation": 0,
          "target": "5-c001-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-114-staff-wc",
      "name": "1.14 Staff WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.8234984324846,
        "pitch": 0.44660251276173035,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.4241705439544496,
          "pitch": 0.2697871704077013,
          "rotation": 0,
          "target": "12-113-staff-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-115-staff-wc",
      "name": "1.15 Staff WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7136492759160422,
        "pitch": 0.3411226753666394,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.4625384019495904,
          "pitch": 0.3579655984069987,
          "rotation": 0,
          "target": "12-113-staff-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-c001-corridor-2",
      "name": "C0.01 Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.277637884209902,
        "pitch": 0.16343245975908793,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.9978743754783608,
          "pitch": 0.11235324337046926,
          "rotation": 0,
          "target": "5-c001-corridor-1"
        },
        {
          "yaw": 0.10420804188197152,
          "pitch": 0.18733968095451736,
          "rotation": 0,
          "target": "16-107-wc-lobby"
        },
        {
          "yaw": 2.145264113854317,
          "pitch": 0.14336036262803553,
          "rotation": 0,
          "target": "19-c001-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-107-wc-lobby",
      "name": "1.07 WC Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.620672285978178,
        "pitch": 0.16761617039539978,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.885830262554876,
          "pitch": 0.17492123564381323,
          "rotation": 0,
          "target": "17-108-ambulant-wc"
        },
        {
          "yaw": 1.9187367382137355,
          "pitch": 0.25339728215729806,
          "rotation": 0,
          "target": "18-109-visitor-acc-wc"
        },
        {
          "yaw": -1.4423168638003698,
          "pitch": 0.1738937170497028,
          "rotation": 0,
          "target": "15-c001-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-108-ambulant-wc",
      "name": "1.08 Ambulant WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6371711358462546,
        "pitch": 0.2462182979263865,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.4156813243845878,
          "pitch": 0.24818637816611755,
          "rotation": 0,
          "target": "16-107-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-109-visitor-acc-wc",
      "name": "1.09 Visitor Acc. WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.629242547339377,
        "pitch": 0.2374824733987264,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.9870075893472716,
          "pitch": 0.29887590554099575,
          "rotation": 0,
          "target": "16-107-wc-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-c001-corridor-3",
      "name": "C0.01 Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.66876911583807,
        "pitch": 0.13387475220621603,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.5761634826569626,
          "pitch": 0.15394457093416136,
          "rotation": 0,
          "target": "15-c001-corridor-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Neech GF Reception 07/04/2023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
