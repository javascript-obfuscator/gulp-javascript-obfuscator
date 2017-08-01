module.exports = {
	obfuscate: (code, options)=>({
		getObfuscatedCode: ()=>` ${code} `,
		getSourceMap: ()=> `Source map!`
	})
};