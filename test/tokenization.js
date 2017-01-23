window.EXPECTED = [
	{
		"name": "sample - bat",
		"language": "bat",
		"result": {
			"vs": [
				[
					{
						"text": "rem *******Begin Comment**************",
						"color": "#008000"
					}
				],
				[
					{
						"text": "rem This program starts the superapp batch program on the network,",
						"color": "#008000"
					}
				],
				[
					{
						"text": "rem directs the output to a file, and displays the file",
						"color": "#008000"
					}
				],
				[
					{
						"text": "rem in Notepad.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "rem *******End Comment**************",
						"color": "#008000"
					}
				],
				[
					{
						"text": "@",
						"color": "#0000ff"
					},
					{
						"text": "echo",
						"color": "#0000ff"
					},
					{
						"text": " off",
						"color": "#000000"
					}
				],
				[
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "exist",
						"color": "#0000ff"
					},
					{
						"text": " C",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#e00000"
					},
					{
						"text": "\\output",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "txt ",
						"color": "#000000"
					},
					{
						"text": "goto",
						"color": "#0000ff"
					},
					{
						"text": " EMPTYEXISTS",
						"color": "#000000"
					}
				],
				[
					{
						"text": "setlocal",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": "    path",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "g",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#e00000"
					},
					{
						"text": "\\programs\\superapp",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "%path%",
						"color": "#001188"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "call",
						"color": "#0000ff"
					},
					{
						"text": " superapp",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "C",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#e00000"
					},
					{
						"text": "\\output",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "txt",
						"color": "#000000"
					}
				],
				[
					{
						"text": "endlocal",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": ":EMPTYEXISTS",
						"color": "#e00000"
					}
				],
				[
					{
						"text": "start",
						"color": "#0000ff"
					},
					{
						"text": " notepad c",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#e00000"
					},
					{
						"text": "\\output",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "txt",
						"color": "#000000"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "rem *******Begin Comment**************",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem This program starts the superapp batch program on the network,",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem directs the output to a file, and displays the file",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem in Notepad.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem *******End Comment**************",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "@",
						"color": "#569cd6"
					},
					{
						"text": "echo",
						"color": "#569cd6"
					},
					{
						"text": " off",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "exist",
						"color": "#569cd6"
					},
					{
						"text": " C",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dd6a6f"
					},
					{
						"text": "\\output",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "txt ",
						"color": "#d4d4d4"
					},
					{
						"text": "goto",
						"color": "#569cd6"
					},
					{
						"text": " EMPTYEXISTS",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "setlocal",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    path",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "g",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dd6a6f"
					},
					{
						"text": "\\programs\\superapp",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "%path%",
						"color": "#74b0df"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "call",
						"color": "#569cd6"
					},
					{
						"text": " superapp",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "C",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dd6a6f"
					},
					{
						"text": "\\output",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "txt",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "endlocal",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": ":EMPTYEXISTS",
						"color": "#dd6a6f"
					}
				],
				[
					{
						"text": "start",
						"color": "#569cd6"
					},
					{
						"text": " notepad c",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dd6a6f"
					},
					{
						"text": "\\output",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "txt",
						"color": "#d4d4d4"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "rem *******Begin Comment**************",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem This program starts the superapp batch program on the network,",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem directs the output to a file, and displays the file",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem in Notepad.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "rem *******End Comment**************",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "@",
						"color": "#569cd6"
					},
					{
						"text": "echo",
						"color": "#569cd6"
					},
					{
						"text": " off",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "exist",
						"color": "#569cd6"
					},
					{
						"text": " C",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#569cd6"
					},
					{
						"text": "\\output",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "txt ",
						"color": "#ffffff"
					},
					{
						"text": "goto",
						"color": "#569cd6"
					},
					{
						"text": " EMPTYEXISTS",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "setlocal",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    path",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": "g",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#569cd6"
					},
					{
						"text": "\\programs\\superapp",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "%path%",
						"color": "#1aebff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "call",
						"color": "#569cd6"
					},
					{
						"text": " superapp",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "C",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#569cd6"
					},
					{
						"text": "\\output",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "txt",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "endlocal",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": ":EMPTYEXISTS",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "start",
						"color": "#569cd6"
					},
					{
						"text": " notepad c",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#569cd6"
					},
					{
						"text": "\\output",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "txt",
						"color": "#ffffff"
					}
				]
			]
		}
	},
	{
		"name": "sample - c",
		"language": "c",
		"result": {
			"vs": [
				[
					{
						"text": "#include",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"pch.h\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": "#include",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Microsoft",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "WRL",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UI",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Core",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Foundation",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Initialize",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "CoreWindow",
						"color": "#000000"
					},
					{
						"text": "^",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "window",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "window",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "UINT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "#if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "defined",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "_DEBUG",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "|=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": "[]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Device",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "              ",
						"color": "#000000"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "              ",
						"color": "#000000"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "   ",
						"color": "#000000"
					},
					{
						"text": "// number of entries in above list",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "          ",
						"color": "#000000"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_featureLevel",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_d3dContext",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "ResizeBuffers",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "else",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "}",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                                     ",
						"color": "#000000"
					},
					{
						"text": "// use automatic sizing",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Format",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "           ",
						"color": "#000000"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Stereo",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "false",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SampleDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Count",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                          ",
						"color": "#000000"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SampleDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Quality",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "BufferUsage",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "BufferCount",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                               ",
						"color": "#000000"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Scaling",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SwapEffect",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Flags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#008000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetAdapter",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetParent",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "__uuidof",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UI",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Core",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CoreWindow",
						"color": "#000000"
					},
					{
						"text": "^",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "reinterpret_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IUnknown",
						"color": "#000000"
					},
					{
						"text": "*>",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// allow on all displays",
						"color": "#008000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// power consumption.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetBuffer",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "__uuidof",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetView",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetDesc",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "depthStencilDesc",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateTexture2D",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "depthStencilDesc",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_depthStencilView",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "viewPort",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "0.0f",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "0.0f",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_d3dContext",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "RSSetViewports",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "viewPort",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "||",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetView",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_depthStencilView",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Present",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "HRESULT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Present",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "==",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "||",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "==",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "Initialize",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "())",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "else",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"pch.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Microsoft",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "WRL",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UI",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Core",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Foundation",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Initialize",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "CoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "^",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "window",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "window",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "UINT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "#if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "defined",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "_DEBUG",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "|=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": "[]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Device",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "              ",
						"color": "#d4d4d4"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "              ",
						"color": "#d4d4d4"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "   ",
						"color": "#d4d4d4"
					},
					{
						"text": "// number of entries in above list",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "          ",
						"color": "#d4d4d4"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_featureLevel",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_d3dContext",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "ResizeBuffers",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                                     ",
						"color": "#d4d4d4"
					},
					{
						"text": "// use automatic sizing",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Format",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "           ",
						"color": "#d4d4d4"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Stereo",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "false",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SampleDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Count",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                          ",
						"color": "#d4d4d4"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SampleDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Quality",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "BufferUsage",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "BufferCount",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                               ",
						"color": "#d4d4d4"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Scaling",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SwapEffect",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Flags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetParent",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UI",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Core",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "^",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "p",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "reinterpret_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IUnknown",
						"color": "#d4d4d4"
					},
					{
						"text": "*>",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "p",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// allow on all displays",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// power consumption.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_renderTargetView",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetDesc",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencilDesc",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateTexture2D",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "depthStencilDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_depthStencilView",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "viewPort",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.0f",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.0f",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dContext",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "RSSetViewports",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "viewPort",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "||",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetView",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_depthStencilView",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Present",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "HRESULT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Present",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "==",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "||",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "==",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "Initialize",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "())",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"pch.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Microsoft",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "WRL",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UI",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Core",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Foundation",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Initialize",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "CoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "^",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "window",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "window",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "UINT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "#if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "defined",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "_DEBUG",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "|=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": "[]",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Device",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "              ",
						"color": "#ffffff"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "              ",
						"color": "#ffffff"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "   ",
						"color": "#ffffff"
					},
					{
						"text": "// number of entries in above list",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "          ",
						"color": "#ffffff"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_featureLevel",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_d3dContext",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "ResizeBuffers",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "2",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                                     ",
						"color": "#ffffff"
					},
					{
						"text": "// use automatic sizing",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Format",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "           ",
						"color": "#ffffff"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Stereo",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "false",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SampleDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Count",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                          ",
						"color": "#ffffff"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SampleDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Quality",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "BufferUsage",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "BufferCount",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "2",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                               ",
						"color": "#ffffff"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Scaling",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SwapEffect",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Flags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetAdapter",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetParent",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UI",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Core",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "^",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "p",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "reinterpret_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IUnknown",
						"color": "#ffffff"
					},
					{
						"text": "*>",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "p",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// allow on all displays",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// power consumption.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetBuffer",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_renderTargetView",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetDesc",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencilDesc",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateTexture2D",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "depthStencilDesc",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_depthStencilView",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "viewPort",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "0.0f",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "0.0f",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dContext",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "RSSetViewports",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "viewPort",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "||",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetView",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_depthStencilView",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Present",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "HRESULT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Present",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "==",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "||",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "==",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "Initialize",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "())",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				]
			]
		}
	},
	{
		"name": "sample - coffeescript",
		"language": "coffeescript",
		"result": {
			"vs": [
				[
					{
						"text": "\"\"\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": "A CoffeeScript sample.",
						"color": "#a31515"
					}
				],
				[
					{
						"text": "\"\"\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "class",
						"color": "#0000ff"
					},
					{
						"text": " Vehicle",
						"color": "#000000"
					}
				],
				[
					{
						"text": "  constructor",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=>",
						"color": "#000000"
					}
				],
				[
					{
						"text": "  ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=>",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#000000"
					},
					{
						"text": "\"Conducting #{",
						"color": "#a31515"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": "}\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "class",
						"color": "#0000ff"
					},
					{
						"text": " Car ",
						"color": "#000000"
					},
					{
						"text": "extends",
						"color": "#0000ff"
					},
					{
						"text": " Vehicle",
						"color": "#000000"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#000000"
					},
					{
						"text": ":",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=>",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#000000"
					},
					{
						"text": "\"Driving #{",
						"color": "#a31515"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": "}\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "c ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "new",
						"color": "#0000ff"
					},
					{
						"text": " Car ",
						"color": "#000000"
					},
					{
						"text": "\"Brandie\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "while",
						"color": "#0000ff"
					},
					{
						"text": " notAtDestination",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "  c",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "drive",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "raceVehicles ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "new",
						"color": "#0000ff"
					},
					{
						"text": " Car ",
						"color": "#000000"
					},
					{
						"text": "for",
						"color": "#0000ff"
					},
					{
						"text": " i ",
						"color": "#000000"
					},
					{
						"text": "in",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "..",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "startRace ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "vehicles",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "vehicle",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "drive",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "for",
						"color": "#0000ff"
					},
					{
						"text": " vehicle ",
						"color": "#000000"
					},
					{
						"text": "in",
						"color": "#0000ff"
					},
					{
						"text": " vehicles",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "fancyRegExp ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "///",
						"color": "#800000"
					}
				],
				[
					{
						"text": "    (\\d+)   ",
						"color": "#800000"
					},
					{
						"text": "# numbers",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    (\\w*)   ",
						"color": "#800000"
					},
					{
						"text": "# letters",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    $       ",
						"color": "#800000"
					},
					{
						"text": "# the end",
						"color": "#008000"
					}
				],
				[
					{
						"text": "///",
						"color": "#800000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "\"\"\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "A CoffeeScript sample.",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "\"\"\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " Vehicle",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "  constructor",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=>",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "  ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=>",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Conducting #{",
						"color": "#ce9178"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": "}\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#d4d4d4"
					},
					{
						"text": "extends",
						"color": "#569cd6"
					},
					{
						"text": " Vehicle",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#d4d4d4"
					},
					{
						"text": ":",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=>",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Driving #{",
						"color": "#ce9178"
					},
					{
						"text": "@name",
						"color": "#4864aa"
					},
					{
						"text": "}\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "c ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Brandie\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "while",
						"color": "#569cd6"
					},
					{
						"text": " notAtDestination",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "  c",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "drive",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "raceVehicles ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#d4d4d4"
					},
					{
						"text": "for",
						"color": "#569cd6"
					},
					{
						"text": " i ",
						"color": "#d4d4d4"
					},
					{
						"text": "in",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "..",
						"color": "#dcdcdc"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "startRace ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "vehicles",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "vehicle",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "drive",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "for",
						"color": "#569cd6"
					},
					{
						"text": " vehicle ",
						"color": "#d4d4d4"
					},
					{
						"text": "in",
						"color": "#569cd6"
					},
					{
						"text": " vehicles",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "fancyRegExp ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "///",
						"color": "#b46695"
					}
				],
				[
					{
						"text": "    (\\d+)   ",
						"color": "#b46695"
					},
					{
						"text": "# numbers",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    (\\w*)   ",
						"color": "#b46695"
					},
					{
						"text": "# letters",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    $       ",
						"color": "#b46695"
					},
					{
						"text": "# the end",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "///",
						"color": "#b46695"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "\"\"\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "A CoffeeScript sample.",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "\"\"\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " Vehicle",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "  constructor",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "@name",
						"color": "#1aebff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=>",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "  ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=>",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#ffffff"
					},
					{
						"text": "\"Conducting #{",
						"color": "#ce9178"
					},
					{
						"text": "@name",
						"color": "#1aebff"
					},
					{
						"text": "}\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#ffffff"
					},
					{
						"text": "extends",
						"color": "#569cd6"
					},
					{
						"text": " Vehicle",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "  drive",
						"color": "#ffffff"
					},
					{
						"text": ":",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=>",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    alert ",
						"color": "#ffffff"
					},
					{
						"text": "\"Driving #{",
						"color": "#ce9178"
					},
					{
						"text": "@name",
						"color": "#1aebff"
					},
					{
						"text": "}\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "c ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#ffffff"
					},
					{
						"text": "\"Brandie\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "while",
						"color": "#569cd6"
					},
					{
						"text": " notAtDestination",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "  c",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "drive",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "raceVehicles ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " Car ",
						"color": "#ffffff"
					},
					{
						"text": "for",
						"color": "#569cd6"
					},
					{
						"text": " i ",
						"color": "#ffffff"
					},
					{
						"text": "in",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "[",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": "..",
						"color": "#ffff00"
					},
					{
						"text": "100",
						"color": "#ffffff"
					},
					{
						"text": "]",
						"color": "#ffff00"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "startRace ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "vehicles",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "[",
						"color": "#ffff00"
					},
					{
						"text": "vehicle",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "drive",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "for",
						"color": "#569cd6"
					},
					{
						"text": " vehicle ",
						"color": "#ffffff"
					},
					{
						"text": "in",
						"color": "#569cd6"
					},
					{
						"text": " vehicles",
						"color": "#ffffff"
					},
					{
						"text": "]",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "fancyRegExp ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "///",
						"color": "#c0c0c0"
					}
				],
				[
					{
						"text": "    (\\d+)   ",
						"color": "#c0c0c0"
					},
					{
						"text": "# numbers",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    (\\w*)   ",
						"color": "#c0c0c0"
					},
					{
						"text": "# letters",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    $       ",
						"color": "#c0c0c0"
					},
					{
						"text": "# the end",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "///",
						"color": "#c0c0c0"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				]
			]
		}
	},
	{
		"name": "sample - cpp",
		"language": "cpp",
		"result": {
			"vs": [
				[
					{
						"text": "#include",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"pch.h\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": "#include",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#a31515"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Microsoft",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "WRL",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UI",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Core",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Foundation",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Initialize",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "CoreWindow",
						"color": "#000000"
					},
					{
						"text": "^",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "window",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "window",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "UINT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "#if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "defined",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "_DEBUG",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "|=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": "[]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Device",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "creationFlags",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "              ",
						"color": "#000000"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "              ",
						"color": "#000000"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "featureLevels",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "   ",
						"color": "#000000"
					},
					{
						"text": "// number of entries in above list",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "          ",
						"color": "#000000"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_featureLevel",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": "                    ",
						"color": "#000000"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#008000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "device",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "context",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_d3dContext",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "ResizeBuffers",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "else",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "}",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                                     ",
						"color": "#000000"
					},
					{
						"text": "// use automatic sizing",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Format",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "           ",
						"color": "#000000"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Stereo",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "false",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SampleDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Count",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                          ",
						"color": "#000000"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SampleDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Quality",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "BufferUsage",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "BufferCount",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "                               ",
						"color": "#000000"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Scaling",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "SwapEffect",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Flags",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#008000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "As",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetAdapter",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiAdapter",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetParent",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "__uuidof",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "Windows",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UI",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Core",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "CoreWindow",
						"color": "#000000"
					},
					{
						"text": "^",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiFactory",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "reinterpret_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "IUnknown",
						"color": "#000000"
					},
					{
						"text": "*>",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "swapChainDesc",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// allow on all displays",
						"color": "#008000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "// power consumption.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "dxgiDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetBuffer",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "__uuidof",
						"color": "#0000ff"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetView",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "backBuffer",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "GetDesc",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "depthStencilDesc",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ComPtr",
						"color": "#000000"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#000000"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateTexture2D",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "depthStencilDesc",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_d3dDevice",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "depthStencil",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "m_depthStencilView",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "viewPort",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "0.0f",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "0.0f",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "static_cast",
						"color": "#0000ff"
					},
					{
						"text": "<",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": ">",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "backBufferDesc",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "m_d3dContext",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "RSSetViewports",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "&",
						"color": "#000000"
					},
					{
						"text": "viewPort",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Width",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "||",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Bounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "!=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_windowBounds",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Height",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_renderTargetView",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "m_depthStencilView",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "nullptr",
						"color": "#0000ff"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Direct3DBase",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "Present",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "HRESULT",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "m_swapChain",
						"color": "#000000"
					},
					{
						"text": "->",
						"color": "#000000"
					},
					{
						"text": "Present",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "if",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "==",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "||",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "==",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "Initialize",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "m_window",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Get",
						"color": "#000000"
					},
					{
						"text": "())",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "else",
						"color": "#0000ff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "DX",
						"color": "#000000"
					},
					{
						"text": "::",
						"color": "#000000"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "hr",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"pch.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Microsoft",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "WRL",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UI",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Core",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Foundation",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Initialize",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "CoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "^",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "window",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "window",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "UINT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "#if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "defined",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "_DEBUG",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "|=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": "[]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Device",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "creationFlags",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "              ",
						"color": "#d4d4d4"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "              ",
						"color": "#d4d4d4"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "featureLevels",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "   ",
						"color": "#d4d4d4"
					},
					{
						"text": "// number of entries in above list",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "          ",
						"color": "#d4d4d4"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_featureLevel",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": "                    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "device",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "context",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_d3dContext",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "ResizeBuffers",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                                     ",
						"color": "#d4d4d4"
					},
					{
						"text": "// use automatic sizing",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Format",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "           ",
						"color": "#d4d4d4"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Stereo",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "false",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SampleDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Count",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                          ",
						"color": "#d4d4d4"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SampleDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Quality",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "BufferUsage",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "BufferCount",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "                               ",
						"color": "#d4d4d4"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Scaling",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "SwapEffect",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Flags",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "As",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiAdapter",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetParent",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "Windows",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UI",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Core",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "CoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "^",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "p",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiFactory",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "reinterpret_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "IUnknown",
						"color": "#d4d4d4"
					},
					{
						"text": "*>",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "p",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "swapChainDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// allow on all displays",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "// power consumption.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "dxgiDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_renderTargetView",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBuffer",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "GetDesc",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencilDesc",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ComPtr",
						"color": "#d4d4d4"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#d4d4d4"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateTexture2D",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "depthStencilDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dDevice",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "depthStencil",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "m_depthStencilView",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "viewPort",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.0f",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.0f",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#dcdcdc"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#dcdcdc"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "backBufferDesc",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_d3dContext",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "RSSetViewports",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "&",
						"color": "#dcdcdc"
					},
					{
						"text": "viewPort",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Width",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "||",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Bounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "!=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_windowBounds",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Height",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_renderTargetView",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_depthStencilView",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Direct3DBase",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "Present",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "HRESULT",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "m_swapChain",
						"color": "#d4d4d4"
					},
					{
						"text": "->",
						"color": "#d4d4d4"
					},
					{
						"text": "Present",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "==",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "||",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "==",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "Initialize",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "m_window",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Get",
						"color": "#d4d4d4"
					},
					{
						"text": "())",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "DX",
						"color": "#d4d4d4"
					},
					{
						"text": "::",
						"color": "#d4d4d4"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "hr",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"pch.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": "#include",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"Direct3DBase.h\"",
						"color": "#ce9178"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Microsoft",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "WRL",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UI",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Core",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Foundation",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Constructor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Initialize the Direct3D resources required to run.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Initialize",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "CoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "^",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "window",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "window",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// These are the resources that depend on the device.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CreateDeviceResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// This flag adds support for surfaces with a different color channel ordering than the API default.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// It is recommended usage, and is required for compatibility with Direct2D.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "UINT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_CREATE_DEVICE_BGRA_SUPPORT",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "#if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "defined",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "_DEBUG",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the project is in a debug build, enable debugging via SDK Layers with this flag.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "|=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_CREATE_DEVICE_DEBUG",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "#endif",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// This array defines the set of DirectX hardware feature levels this app will support.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Note the ordering should be preserved.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Don't forget to declare your application's minimum required feature level in its",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// description.  All applications are assumed to support 9.1 unless otherwise stated.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": "[]",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_11_0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_10_0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_3",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_2",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_FEATURE_LEVEL_9_1",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create the DX11 API device object, and get a corresponding context.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Device",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11DeviceContext",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11CreateDevice",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// specify null to use the default adapter",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "D3D_DRIVER_TYPE_HARDWARE",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// leave as nullptr unless software device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "creationFlags",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "              ",
						"color": "#ffffff"
					},
					{
						"text": "// optionally set debug and Direct2D compatibility flags",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "              ",
						"color": "#ffffff"
					},
					{
						"text": "// list of feature levels this app can support",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "ARRAYSIZE",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "featureLevels",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "   ",
						"color": "#ffffff"
					},
					{
						"text": "// number of entries in above list",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_SDK_VERSION",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "          ",
						"color": "#ffffff"
					},
					{
						"text": "// always set this to D3D11_SDK_VERSION",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// returns the Direct3D device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_featureLevel",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "// returns feature level of device created",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": "                    ",
						"color": "#ffffff"
					},
					{
						"text": "// returns the device immediate context",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Get the DirectX11.1 device by QI off the DirectX11 one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "device",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// And get the corresponding device context in the same way.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "context",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_d3dContext",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "// Allocate all memory resources that change on a window SizeChanged event.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Store the window bounds so the next time we get a SizeChanged event we can",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// avoid rebuilding everything if the size is identical.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the swap chain already exists, resize it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "ResizeBuffers",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "2",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Otherwise, create a new one.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a descriptor for the swap chain.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SWAP_CHAIN_DESC1",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                                     ",
						"color": "#ffffff"
					},
					{
						"text": "// use automatic sizing",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Format",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_B8G8R8A8_UNORM",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "           ",
						"color": "#ffffff"
					},
					{
						"text": "// this is the most common swapchain format",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Stereo",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "false",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SampleDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Count",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                          ",
						"color": "#ffffff"
					},
					{
						"text": "// don't use multi-sampling",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SampleDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Quality",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "BufferUsage",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_USAGE_RENDER_TARGET_OUTPUT",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "BufferCount",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "2",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": "                               ",
						"color": "#ffffff"
					},
					{
						"text": "// use two buffers to enable flip effect",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Scaling",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SCALING_NONE",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "SwapEffect",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "// we recommend using this swap effect for all applications",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Flags",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// First, retrieve the underlying DXGI Device from the D3D Device",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIDevice1",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "As",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Identify the physical adapter (GPU or card) this device is running on.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIAdapter",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetAdapter",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// And obtain the factory object that created it.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiAdapter",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetParent",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "IDXGIFactory2",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "Windows",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UI",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Core",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "CoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "^",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "p",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a swap chain for this window from the DXGI factory.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiFactory",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateSwapChainForCoreWindow",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "reinterpret_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "IUnknown",
						"color": "#ffffff"
					},
					{
						"text": "*>",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "p",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "swapChainDesc",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// allow on all displays",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "                ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// Ensure that DXGI does not queue more than one frame at a time. This both reduces ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// latency and ensures that the application will only render after each VSync, minimizing ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "// power consumption.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "dxgiDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "SetMaximumFrameLatency",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Obtain the backbuffer for this window which will be the final 3D rendertarget.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetBuffer",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "__uuidof",
						"color": "#569cd6"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a view interface on the rendertarget to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateRenderTargetView",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_renderTargetView",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Cache the rendertarget dimensions in our helper class for convenient use.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_TEXTURE2D_DESC",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "backBuffer",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "GetDesc",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetSize",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a descriptor for the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CD3D11_TEXTURE2D_DESC",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencilDesc",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_FORMAT_D24_UNORM_S8_UINT",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "D3D11_BIND_DEPTH_STENCIL",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Allocate a 2-D surface as the depth/stencil buffer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "ComPtr",
						"color": "#ffffff"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "ID3D11Texture2D",
						"color": "#ffffff"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateTexture2D",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "depthStencilDesc",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a DepthStencil view on this surface to use on bind.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dDevice",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "CreateDepthStencilView",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "depthStencil",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "CD3D11_DEPTH_STENCIL_VIEW_DESC",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "D3D11_DSV_DIMENSION_TEXTURE2D",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "m_depthStencilView",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Create a viewport descriptor of the full window size.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "CD3D11_VIEWPORT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "viewPort",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "0.0f",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "0.0f",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ",",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "static_cast",
						"color": "#569cd6"
					},
					{
						"text": "<",
						"color": "#ffff00"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": ">",
						"color": "#ffff00"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "backBufferDesc",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// Set the current viewport using the descriptor.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "m_d3dContext",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "RSSetViewports",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "&",
						"color": "#ffff00"
					},
					{
						"text": "viewPort",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "UpdateForWindowSizeChange",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Width",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "||",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Bounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "!=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_windowBounds",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Height",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_renderTargetView",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "m_depthStencilView",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "nullptr",
						"color": "#569cd6"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "CreateWindowSizeDependentResources",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Direct3DBase",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "Present",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// The first argument instructs DXGI to block until VSync, putting the application",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// to sleep until the next VSync. This ensures we don't waste any cycles rendering",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// frames that will never be displayed to the screen.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "HRESULT",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "m_swapChain",
						"color": "#ffffff"
					},
					{
						"text": "->",
						"color": "#ffffff"
					},
					{
						"text": "Present",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "1",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// If the device was removed either by a disconnect or a driver upgrade, we ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "// must completely reinitialize the renderer.",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "if",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "==",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_ERROR_DEVICE_REMOVED",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "||",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "==",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "DXGI_ERROR_DEVICE_RESET",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "Initialize",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "m_window",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Get",
						"color": "#ffffff"
					},
					{
						"text": "())",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "else",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "DX",
						"color": "#ffffff"
					},
					{
						"text": "::",
						"color": "#ffffff"
					},
					{
						"text": "ThrowIfFailed",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "hr",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				]
			]
		}
	},
	{
		"name": "sample - csharp",
		"language": "csharp",
		"result": {
			"vs": [
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Collections",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Generic",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Diagnostics",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Linq",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Text",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "using",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "System",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Threading",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Tasks",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "namespace",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "VS",
						"color": "#000000"
					}
				],
				[
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "class",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Program",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "static",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "void",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Main",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "string",
						"color": "#0000ff"
					},
					{
						"text": "[]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "args",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "si",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "new",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#000000"
					},
					{
						"text": "()",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "float",
						"color": "#0000ff"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "load",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "3.2e02f",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "si",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "FileName",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "@\"",
						"color": "#a31515"
					},
					{
						"text": "tools\\\\node.exe",
						"color": "#a31515"
					},
					{
						"text": "\"",
						"color": "#a31515"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "si",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Arguments",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#a31515"
					},
					{
						"text": "tools",
						"color": "#a31515"
					},
					{
						"text": "\\\\",
						"color": "#a31515"
					},
					{
						"text": "simpleserver.js",
						"color": "#a31515"
					},
					{
						"text": "\"",
						"color": "#a31515"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "Process",
						"color": "#000000"
					},
					{
						"text": ".",
						"color": "#000000"
					},
					{
						"text": "Start",
						"color": "#000000"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "si",
						"color": "#000000"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Collections",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Generic",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Diagnostics",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Linq",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Text",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "System",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Threading",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Tasks",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "VS",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Program",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "static",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Main",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "string",
						"color": "#569cd6"
					},
					{
						"text": "[]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "args",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "si",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#d4d4d4"
					},
					{
						"text": "()",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "load",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "3.2e02f",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "si",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "FileName",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "@\"",
						"color": "#ce9178"
					},
					{
						"text": "tools\\\\node.exe",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "si",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Arguments",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": "tools",
						"color": "#ce9178"
					},
					{
						"text": "\\\\",
						"color": "#ce9178"
					},
					{
						"text": "simpleserver.js",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "Process",
						"color": "#d4d4d4"
					},
					{
						"text": ".",
						"color": "#dcdcdc"
					},
					{
						"text": "Start",
						"color": "#d4d4d4"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "si",
						"color": "#d4d4d4"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Collections",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Generic",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Diagnostics",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Linq",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Text",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "using",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "System",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Threading",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Tasks",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "namespace",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "VS",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "class",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Program",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "static",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "void",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Main",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "string",
						"color": "#569cd6"
					},
					{
						"text": "[]",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "args",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "si",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "new",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "ProcessStartInfo",
						"color": "#ffffff"
					},
					{
						"text": "()",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "float",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "load",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "3.2e02f",
						"color": "#ffffff"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "si",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "FileName",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "@\"",
						"color": "#ce9178"
					},
					{
						"text": "tools\\\\node.exe",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "si",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Arguments",
						"color": "#ffffff"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "=",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": "tools",
						"color": "#ce9178"
					},
					{
						"text": "\\\\",
						"color": "#ce9178"
					},
					{
						"text": "simpleserver.js",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "            ",
						"color": "#ffffff"
					},
					{
						"text": "Process",
						"color": "#ffffff"
					},
					{
						"text": ".",
						"color": "#ffff00"
					},
					{
						"text": "Start",
						"color": "#ffffff"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "si",
						"color": "#ffffff"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				]
			]
		}
	},
	{
		"name": "sample - css",
		"language": "css",
		"result": {
			"vs": [
				[
					{
						"text": "html",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e2e2e2",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "body",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#fff",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#000",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".85",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-family:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#a31515"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "\"HelveticaNeue-Light\"",
						"color": "#a31515"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "sans-serif",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "a:link",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:visited",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "a:active",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "outline:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "3",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "a:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#c7d1d6",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "header",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hgroup",
						"color": "#800000"
					}
				],
				[
					{
						"text": "nav",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "section",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".float-left",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".float-right",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "right",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".highlight",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/*    background-color: #a6dbed;",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    padding-left: 5px;",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    padding-right: 5px;*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".clear-fix:after",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "content:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\".\"",
						"color": "#a31515"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "clear:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "both",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "visibility:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hidden",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h1",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h2",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h3",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "h4",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h5",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h6",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#000",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h1",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h2",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.75",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h3",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h4",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.1",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h5",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h6",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".tile",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "200",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "325",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "-webkit-perspective:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "-webkit-transform-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "preserve-3d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "-webkit-transition:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "-webkit-transform",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0.2",
						"color": "#09885a"
					},
					{
						"text": "s",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "-webkit-box-shadow:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "rgba(",
						"color": "#0451a5"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": "0.3",
						"color": "#09885a"
					},
					{
						"text": ")",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-position:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "center",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "center",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-repeat:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "#fff",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".tile-item",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inherit",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "50",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "70",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-image:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "'../Images/documents.png'",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-repeat:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".tile-wrapper",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-family:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#a31515"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Tahoma",
						"color": "#0451a5"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Geneva",
						"color": "#0451a5"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "Verdana",
						"color": "#0451a5"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "sans-serif",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "line-height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "21",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "14",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "a.blue-box",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "28",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#8ABAE4",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.blue-box:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#8ABAE4",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#FFFFFF",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "a.green-box",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "28",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#9CCF42",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.green-box:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#9CCF42",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#FFFFFF",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "a.green-box2",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "14",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "48",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "48",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "/* border-color: #C0C0C0; */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "6",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "bold",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.green-box2:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#8ABAE4",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-image:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "'../Images/documents.png'",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#EFEFEF",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "a.yellow-box",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "28",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#DECF6B",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.yellow-box:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#DECF6B",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#FFFFFF",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "a.red-box",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "28",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#F79E84",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#C0C0C0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.red-box:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "4",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#F79E84",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "12",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#FFFFFF",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/* main layout ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".content-wrapper",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "max-width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "960",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "#body",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#efeeef",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "clear:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "both",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "35",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".main-content",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/accent.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "30",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "+",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".main-content",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/heroaccent.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "clear:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "both",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e2e2e2",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".8",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* site title",
						"color": "#008000"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".site-title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#0066CC",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "/* font-family: Rockwell, Consolas, \"Courier New\", Courier, monospace; */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "3.3",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "40",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".site-title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".site-title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:hover",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".site-title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:active",
						"color": "#800000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#0066CC",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "outline:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* login  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".85",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "right",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#d3dce0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "3",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "3",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a.username",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "underline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/* menu  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.3",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "600",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "right",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#999",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* page elements  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "/* featured */",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#fff",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".content-wrapper",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "/*background-color: #7ac0da;",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        background-image: -ms-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        background-image: -o-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #7AC0DA), color-stop(1, #A4D4E6));",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        background-image: -webkit-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        background-image: linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        color: #3e5667;",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "40",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "30",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "40",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h1",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h2",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "/* color: #fff;",
						"color": "#008000"
					}
				],
				[
					{
						"text": "                */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.1",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* page titles */",
						"color": "#008000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h1",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h2",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h2",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "normal",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* releases */",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".milestone",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#fff",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#8ABAE4",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "normal",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": "  ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".milestone",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".primary",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.75",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".milestone",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".secondary",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "normal",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* padding: 5px 5px 5px 10px;*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/* features */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "section.feature",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "200",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* ordered list */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "list-style-type:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "25",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "45",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.one",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/orderedlistOne.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.two",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/orderedlistTwo.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.three",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/orderedlistThree.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/* content */",
						"color": "#008000"
					},
					{
						"text": "  ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "article",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "70",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "aside",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "right",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "25",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "aside",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ul",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					},
					{
						"text": "aside",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ul",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/bullet.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "50",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					}
				],
				[
					{
						"text": ".label",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "700",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* login page */",
						"color": "#008000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "#loginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#c8c8c8",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "45",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#loginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".validation-error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "#socialLoginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "40",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "50",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* contact */",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "h3",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "iframe",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* forms */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "legend",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ol",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ol",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "label",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "600",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "label.checkbox",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "text",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "password",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e2e2e2",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "6",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "300",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "text",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ":focus",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "password",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ":focus",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#7ac0da",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "submit",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#d3dce0",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#787878",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "cursor:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "pointer",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.2",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "600",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "7",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* ajax login/registration dialog */",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".modal-popup",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0.7",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* info and errors */",
						"color": "#008000"
					},
					{
						"text": "  ",
						"color": "#000000"
					}
				],
				[
					{
						"text": ".message-info",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "clear:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "both",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".message-error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "clear:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "both",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e80c4d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.1",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "bold",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".message-success",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#7ac0da",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.3",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "bold",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".success",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#7ac0da",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e80c4d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* styles for validation helpers */",
						"color": "#008000"
					}
				],
				[
					{
						"text": ".field-validation-error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e80c4d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "bold",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".field-validation-valid",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "text",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ".input-validation-error",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "password",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ".input-validation-error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e80c4d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".validation-summary-errors",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e80c4d",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "bold",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.1",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".validation-summary-valid",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "/* social */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "ul#social",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ul#social",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#999",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-decoration:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.facebook",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a.twitter",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "24",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "17",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-indent:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "-9999",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "16",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.facebook",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/facebook.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "a.twitter",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "url",
						"color": "#0451a5"
					},
					{
						"text": "(",
						"color": "#000000"
					},
					{
						"text": "\"../images/twitter.png\"",
						"color": "#a31515"
					},
					{
						"text": ")",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "no-repeat",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "/********************",
						"color": "#008000"
					}
				],
				[
					{
						"text": "*   Mobile Styles   *",
						"color": "#008000"
					}
				],
				[
					{
						"text": "********************/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "@",
						"color": "#000000"
					},
					{
						"text": "media",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "only",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "screen",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "and",
						"color": "#800000"
					},
					{
						"text": " (",
						"color": "#000000"
					},
					{
						"text": "max-width:",
						"color": "#800000"
					},
					{
						"text": " 850",
						"color": "#000000"
					},
					{
						"text": "px",
						"color": "#800000"
					},
					{
						"text": ") ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* header  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    header .float-left, ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    header .float-right {",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* logo */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "header",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".site-title",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "/*margin: 0; */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "/*margin: 10px;*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "left",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* login */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".85",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-top:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "center",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "ul",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "list-style:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#999",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "600",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "2",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "#login",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a:hover",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#333",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* menu */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "nav",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "5",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "center",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ul#menu",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* main layout  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".main-content",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "+",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".main-content",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "background-position:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".content-wrapper",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": ".featured",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".content-wrapper",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* page content */",
						"color": "#008000"
					},
					{
						"text": "  ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "article",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "aside",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "100",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* ordered list */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "list-style-type:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "25",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.one",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.two",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "ol.round",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "li.three",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "                ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					},
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					},
					{
						"text": "/* features */",
						"color": "#008000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					},
					{
						"text": "section.feature",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "     ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "section.feature",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "img",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#999",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "content:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "attr(alt)",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1.5",
						"color": "#09885a"
					},
					{
						"text": "em",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "600",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* forms */",
						"color": "#008000"
					},
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "text",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "fieldset",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "input",
						"color": "#800000"
					},
					{
						"text": "[",
						"color": "#000000"
					},
					{
						"text": "type",
						"color": "#0451a5"
					},
					{
						"text": "=",
						"color": "#000000"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "password",
						"color": "#0451a5"
					},
					{
						"text": "\"",
						"color": "#000000"
					},
					{
						"text": "]",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "90",
						"color": "#09885a"
					},
					{
						"text": "%",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* login page */",
						"color": "#008000"
					},
					{
						"text": " ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#loginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "border-right:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "#loginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".validation-error",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "block",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "15",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "#socialLoginForm",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "margin-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "/* footer  ",
						"color": "#008000"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#008000"
					},
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".float-left",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".float-right",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "text-align:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "center",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "10",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "footer",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "p",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "ul#social",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding:",
						"color": "#ff0000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "         ",
						"color": "#000000"
					},
					{
						"text": "a.facebook",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "a.twitter",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "display:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "inline",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "float:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "none",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "padding-left:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "text-indent:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "            ",
						"color": "#000000"
					},
					{
						"text": "width:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "        ",
						"color": "#000000"
					},
					{
						"text": "}",
						"color": "#000000"
					},
					{
						"text": "    ",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".subsite",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#444",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "h3",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-weight:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "normal",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "font-size:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "24",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#444",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".tiles",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "padding-bottom:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "20",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background-color:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#e3e3e3",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": "#editor",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "margin:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "0",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "auto",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "height:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "500",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "border:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "1",
						"color": "#09885a"
					},
					{
						"text": "px",
						"color": "#09885a"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "solid",
						"color": "#0451a5"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#ccc",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".monaco-editor.monaco",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor.vs",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor.eclipse",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#F9F9F9",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				],
				[
					{
						"text": " ",
						"color": "#333333"
					}
				],
				[
					{
						"text": ".monaco-editor.monaco",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor.vs",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#800000"
					},
					{
						"text": ",",
						"color": "#000000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor.eclipse",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#800000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "{",
						"color": "#000000"
					}
				],
				[
					{
						"text": "    ",
						"color": "#000000"
					},
					{
						"text": "background:",
						"color": "#ff0000"
					},
					{
						"text": " ",
						"color": "#000000"
					},
					{
						"text": "#F9F9F9",
						"color": "#0451a5"
					},
					{
						"text": ";",
						"color": "#000000"
					}
				],
				[
					{
						"text": "}",
						"color": "#000000"
					}
				]
			],
			"vs_dark": [
				[
					{
						"text": "html",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e2e2e2",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "body",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#fff",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#000",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".85",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-family:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "\"HelveticaNeue-Light\"",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "sans-serif",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "a:link",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:visited",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "a:active",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "outline:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "3",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#c7d1d6",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "header",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hgroup",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "nav",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "section",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".float-left",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".float-right",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "right",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".highlight",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "/*    background-color: #a6dbed;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    padding-left: 5px;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    padding-right: 5px;*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".clear-fix:after",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "content:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\".\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "clear:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "both",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "visibility:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hidden",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "h4",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h5",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h6",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#000",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.75",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h4",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.1",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h5",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h6",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".tile",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "200",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "325",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "-webkit-perspective:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "-webkit-transform-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "preserve-3d",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "-webkit-transition:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "-webkit-transform",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.2",
						"color": "#b5cea8"
					},
					{
						"text": "s",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "-webkit-box-shadow:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "rgba(",
						"color": "#ce9178"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": "0.3",
						"color": "#b5cea8"
					},
					{
						"text": ")",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-position:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "center",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "center",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-repeat:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "#fff",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".tile-item",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inherit",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "50",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "70",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-image:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "'../Images/documents.png'",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-repeat:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".tile-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-family:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Tahoma",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Geneva",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "Verdana",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "sans-serif",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "line-height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "21",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "14",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "a.blue-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "28",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#8ABAE4",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.blue-box:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#8ABAE4",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#FFFFFF",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "a.green-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "28",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#9CCF42",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.green-box:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#9CCF42",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#FFFFFF",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "a.green-box2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "14",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "48",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "48",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* border-color: #C0C0C0; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "6",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "bold",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.green-box2:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#8ABAE4",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-image:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "'../Images/documents.png'",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#EFEFEF",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "a.yellow-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "28",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#DECF6B",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.yellow-box:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#DECF6B",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#FFFFFF",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "a.red-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "28",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#F79E84",
						"color": "#d4d4d4"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#C0C0C0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.red-box:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "4",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#F79E84",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "12",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#FFFFFF",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "/* main layout ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".content-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "max-width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "960",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "#body",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#efeeef",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "clear:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "both",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "35",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".main-content",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/accent.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "30",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "+",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".main-content",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/heroaccent.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "clear:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "both",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e2e2e2",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".8",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* site title",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".site-title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#0066CC",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* font-family: Rockwell, Consolas, \"Courier New\", Courier, monospace; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "3.3",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "40",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".site-title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".site-title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".site-title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:active",
						"color": "#569cd6"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#0066CC",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "outline:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* login  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".85",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "right",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#d3dce0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "3",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "3",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.username",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "underline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "/* menu  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.3",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "600",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "right",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#999",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* page elements  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "/* featured */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#fff",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".content-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "/*background-color: #7ac0da;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        background-image: -ms-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        background-image: -o-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #7AC0DA), color-stop(1, #A4D4E6));",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        background-image: -webkit-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        background-image: linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        color: #3e5667;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "40",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "30",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "40",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* color: #fff;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "                */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "p",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.1",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* page titles */",
						"color": "#608b4e"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "hgroup.title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "normal",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* releases */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".milestone",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#fff",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#8ABAE4",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "normal",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".milestone",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".primary",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.75",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".milestone",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".secondary",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "normal",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* padding: 5px 5px 5px 10px;*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "/* features */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "section.feature",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "200",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* ordered list */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style-type:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "25",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "45",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.one",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/orderedlistOne.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.two",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/orderedlistTwo.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.three",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/orderedlistThree.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "/* content */",
						"color": "#608b4e"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "article",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "70",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "aside",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "right",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "25",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "aside",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					},
					{
						"text": "aside",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/bullet.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "50",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": ".label",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "700",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* login page */",
						"color": "#608b4e"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "#loginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#c8c8c8",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "45",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#loginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".validation-error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "#socialLoginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "40",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "50",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* contact */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "p",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".contact",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "iframe",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* forms */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "legend",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "label",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "600",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "label.checkbox",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "text",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "password",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e2e2e2",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "6",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "300",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "text",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ":focus",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "password",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ":focus",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#7ac0da",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "submit",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#d3dce0",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#787878",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "cursor:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "pointer",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.2",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "600",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "7",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* ajax login/registration dialog */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".modal-popup",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0.7",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* info and errors */",
						"color": "#608b4e"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": ".message-info",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "clear:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "both",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".message-error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "clear:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "both",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e80c4d",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.1",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "bold",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".message-success",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#7ac0da",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.3",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "bold",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".success",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#7ac0da",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e80c4d",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* styles for validation helpers */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": ".field-validation-error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e80c4d",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "bold",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".field-validation-valid",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "text",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ".input-validation-error",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "password",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ".input-validation-error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e80c4d",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".validation-summary-errors",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e80c4d",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "bold",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.1",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".validation-summary-valid",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "/* social */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "ul#social",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#social",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#999",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-decoration:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.facebook",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.twitter",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "24",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "17",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-indent:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "-9999",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "16",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.facebook",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/facebook.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.twitter",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "url",
						"color": "#ce9178"
					},
					{
						"text": "(",
						"color": "#dcdcdc"
					},
					{
						"text": "\"../images/twitter.png\"",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "no-repeat",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "/********************",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "*   Mobile Styles   *",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "********************/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "@",
						"color": "#d4d4d4"
					},
					{
						"text": "media",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "only",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "screen",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "and",
						"color": "#569cd6"
					},
					{
						"text": " (",
						"color": "#d4d4d4"
					},
					{
						"text": "max-width:",
						"color": "#569cd6"
					},
					{
						"text": " 850",
						"color": "#d4d4d4"
					},
					{
						"text": "px",
						"color": "#569cd6"
					},
					{
						"text": ") ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* header  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    header .float-left, ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    header .float-right {",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* logo */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "header",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".site-title",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "/*margin: 0; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "/*margin: 10px;*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "left",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* login */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".85",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-top:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "center",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#999",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "600",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "2",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "#login",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#333",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* menu */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "nav",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "5",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "center",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#menu",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* main layout  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".main-content",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "+",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".main-content",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-position:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".content-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": ".featured",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".content-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* page content */",
						"color": "#608b4e"
					},
					{
						"text": "  ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "article",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "aside",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "100",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* ordered list */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "list-style-type:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "25",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.one",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.two",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "ol.round",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "li.three",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "                ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					},
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* features */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					},
					{
						"text": "section.feature",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "     ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "section.feature",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "img",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#999",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "content:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "attr(alt)",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1.5",
						"color": "#b5cea8"
					},
					{
						"text": "em",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "600",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* forms */",
						"color": "#608b4e"
					},
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "text",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "fieldset",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "input",
						"color": "#569cd6"
					},
					{
						"text": "[",
						"color": "#dcdcdc"
					},
					{
						"text": "type",
						"color": "#ce9178"
					},
					{
						"text": "=",
						"color": "#dcdcdc"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "password",
						"color": "#ce9178"
					},
					{
						"text": "\"",
						"color": "#d4d4d4"
					},
					{
						"text": "]",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "90",
						"color": "#b5cea8"
					},
					{
						"text": "%",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* login page */",
						"color": "#608b4e"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#loginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "border-right:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "#loginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".validation-error",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "block",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "15",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "#socialLoginForm",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "/* footer  ",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ----------------------------------------------------------*/",
						"color": "#608b4e"
					},
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".float-left",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".float-right",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-align:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "center",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "10",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "p",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "ul#social",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding:",
						"color": "#9cdcfe"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "         ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.facebook",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "a.twitter",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "display:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "inline",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "float:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "none",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-left:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "text-indent:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "            ",
						"color": "#d4d4d4"
					},
					{
						"text": "width:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "        ",
						"color": "#d4d4d4"
					},
					{
						"text": "}",
						"color": "#dcdcdc"
					},
					{
						"text": "    ",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": "}",
						"color": "#d4d4d4"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".subsite",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#444",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-weight:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "normal",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "font-size:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "24",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#444",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".tiles",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "padding-bottom:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "20",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background-color:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#e3e3e3",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": "#editor",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "margin:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "0",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "auto",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "height:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "500",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "border:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "1",
						"color": "#b5cea8"
					},
					{
						"text": "px",
						"color": "#b5cea8"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "solid",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#ccc",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".monaco-editor.monaco",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor.vs",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor.eclipse",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#F9F9F9",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": " ",
						"color": "#bbbbbb"
					}
				],
				[
					{
						"text": ".monaco-editor.monaco",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor.vs",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#dcdcdc"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor.eclipse",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": ".monaco-editor-background",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "{",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "    ",
						"color": "#d4d4d4"
					},
					{
						"text": "background:",
						"color": "#9cdcfe"
					},
					{
						"text": " ",
						"color": "#d4d4d4"
					},
					{
						"text": "#F9F9F9",
						"color": "#d4d4d4"
					},
					{
						"text": ";",
						"color": "#dcdcdc"
					}
				],
				[
					{
						"text": "}",
						"color": "#dcdcdc"
					}
				]
			],
			"hc_black": [
				[
					{
						"text": "html",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#e2e2e2",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "body",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#fff",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "solid",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "10",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#000",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#333",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": ".85",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-family:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "\"HelveticaNeue-Light\"",
						"color": "#ce9178"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "sans-serif",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "a:link",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "a:visited",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "a:active",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#333",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "outline:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "none",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-left:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-right:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "3",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "text-decoration:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "none",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "        ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "a:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#c7d1d6",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "header",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "footer",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hgroup",
						"color": "#569cd6"
					}
				],
				[
					{
						"text": "nav",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "section",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "display:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "block",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".float-left",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "float:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "left",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".float-right",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "float:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "right",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".highlight",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "/*    background-color: #a6dbed;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    padding-left: 5px;",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    padding-right: 5px;*/",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".clear-fix:after",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "content:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\".\"",
						"color": "#ce9178"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "clear:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "both",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "display:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "block",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "visibility:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "hidden",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h4",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "h5",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "h6",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#000",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-bottom:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-bottom:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h1",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "2",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h2",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1.75",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h3",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1.2",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h4",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1.1",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "h5",
						"color": "#569cd6"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "h6",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "em",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".tile",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "float:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "left",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "width:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "200",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "325",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "5",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-right:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "5",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-bottom:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "20",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "20",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "-webkit-perspective:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "-webkit-transform-style:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "preserve-3d",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "-webkit-transition:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "-webkit-transform",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0.2",
						"color": "#3ff23f"
					},
					{
						"text": "s",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "-webkit-box-shadow:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "rgba(",
						"color": "#3ff23f"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "0",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": "0.3",
						"color": "#3ff23f"
					},
					{
						"text": ")",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-position:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "center",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "center",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-repeat:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "no-repeat",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-color:",
						"color": "#569cd6"
					},
					{
						"text": "  ",
						"color": "#ffffff"
					},
					{
						"text": "#fff",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".tile-item",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "/* 2px solid #7ac0da; */",
						"color": "#608b4e"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "inherit",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "float:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "left",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "width:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "50",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "70",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-right:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "20",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-bottom:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "20",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "margin-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "20",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-image:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "url",
						"color": "#3ff23f"
					},
					{
						"text": "(",
						"color": "#ffff00"
					},
					{
						"text": "'../Images/documents.png'",
						"color": "#ce9178"
					},
					{
						"text": ")",
						"color": "#ffff00"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-repeat:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "no-repeat",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": ".tile-wrapper",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "width:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "100",
						"color": "#3ff23f"
					},
					{
						"text": "%",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-family:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "\"Segoe UI\"",
						"color": "#ce9178"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Tahoma",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Geneva",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "Verdana",
						"color": "#3ff23f"
					},
					{
						"text": ",",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "sans-serif",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "line-height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "21",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "14",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "a.blue-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "28",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "100",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "display:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "block",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-style:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "solid",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-width:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "4",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#8ABAE4",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "15",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-left:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "15",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "a.blue-box:hover",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "4",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "solid",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#8ABAE4",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					},
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "12",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-left:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "12",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "background-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#FFFFFF",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "a.green-box",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "{",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "font-size:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "28",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "height:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "100",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "display:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "block",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-style:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "solid",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-width:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "4",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "1",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "border-color:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#9CCF42",
						"color": "#3ff23f"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "#C0C0C0",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-top:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "15",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "    ",
						"color": "#ffffff"
					},
					{
						"text": "padding-left:",
						"color": "#569cd6"
					},
					{
						"text": " ",
						"color": "#ffffff"
					},
					{
						"text": "15",
						"color": "#3ff23f"
					},
					{
						"text": "px",
						"color": "#3ff23f"
					},
					{
						"text": ";",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": "}",
						"color": "#ffff00"
					}
				],
				[
					{
						"text": " ",
						"color": "#ffffff"
					}
				],
				[
					{
						"text": "    ",
					},
			]