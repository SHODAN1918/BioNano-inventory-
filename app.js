// Chemical inventory data - All 147 chemicals 
let chemicalData = [
    {"id": "beta-alanine", "name": "β-Alanine", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "89.09", "casNumber": "107-95-9", "hazardClass": "Low toxicity, generally safe, mild eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "chloramphenicol", "name": "Chloramphenicol", "shelf": "Amino acids", "stock": "", "molecularWeight": "323.13", "casNumber": "56-75-7", "hazardClass": "HIGH TOXICITY - Carcinogen Category 2A, aplastic anemia risk, avoid skin contact", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-arabinose", "name": "L-Arabinose", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "150.13", "casNumber": "5328-37-0", "hazardClass": "Low toxicity, generally safe, minimal hazard", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-arginin", "name": "L-Arginin", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "174.2", "casNumber": "74-79-3", "hazardClass": "Low toxicity, generally safe, mild irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-arginine-monohydrochloride", "name": "L-Arginine monohydrochloride", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "210.66", "casNumber": "1119-34-2", "hazardClass": "Low toxicity, generally safe, mild irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-cysteine-hydrochloride-monohydrate", "name": "L-Cysteine hydrochloride monohydrate", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "175.63", "casNumber": "7048-04-6", "hazardClass": "Low toxicity, mild eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-histidine-hydrochloride-monohydrate", "name": "L-Histidine hydrochloride monohydrate", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "209.63", "casNumber": "5934-29-2", "hazardClass": "Low toxicity, mild eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-lysine", "name": "L-Lysine", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "146.19", "casNumber": "56-87-1", "hazardClass": "Low toxicity, generally safe, mild irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "maleic-acid", "name": "Maleic acid", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "116.07", "casNumber": "110-16-7", "hazardClass": "Moderate toxicity, corrosive to eyes/skin, respiratory irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "d-maltose-monohydrate", "name": "D-(+)-Maltose monohydrate", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "360.31", "casNumber": "6363-53-7", "hazardClass": "Low toxicity, generally safe, minimal hazard", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "l-methionine", "name": "L-Methionine", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "149.21", "casNumber": "63-68-3", "hazardClass": "Low toxicity, generally safe, mild irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "molybdic-acid", "name": "Molybdic acid", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "161.96", "casNumber": "7782-91-4", "hazardClass": "Moderate toxicity, harmful if ingested, eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "nalidixic-acid", "name": "Nalidixic acid", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "232.24", "casNumber": "389-08-2", "hazardClass": "Moderate toxicity, harmful if ingested, photosensitizer", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "peg-8000", "name": "Peg 8000", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "~8000", "casNumber": "25322-68-3", "hazardClass": "Low toxicity, generally safe, mild eye irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "polyethylene-glycol", "name": "Polyethylene glycol", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "~400", "casNumber": "25322-68-3", "hazardClass": "Low toxicity, generally safe, mild irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "silica-gel-type-3", "name": "Silica gel, type 3", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "7631-86-9", "hazardClass": "Low acute toxicity, avoid inhalation of dust", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "starch-from-corn", "name": "Strach from corn", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Low toxicity, generally safe, minimal hazard", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sucrose", "name": "Sucrose", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "342.3", "casNumber": "57-50-1", "hazardClass": "Very low toxicity, food grade, generally safe", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "cm-sephadex", "name": "CM sephadex", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "diethylaminoethyl-cellulose", "name": "Diethylaminoethyl cellulose (pre swollen microgranular anion exchanger)", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sephadex-g-15", "name": "Sephadex G-15", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "9050-36-6", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sephadex-g-25-fine", "name": "Sephadex G-25 fine", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "9050-36-6", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sephadex-g-25-for-gel-filtration", "name": "Sephadex G-25 for gel filtration", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sephadex-g-50", "name": "Sephadex G-50", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "superdex-75-prep-grade", "name": "Superdex 75 prep grade", "shelf": "Amino acids", "stock": "", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "q-sepharose", "name": "Q Sepharose", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "9012-36-6", "hazardClass": "Refer to SDS", "primaryUse": "Chromatography resin", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "molecular-sieve", "name": "Molecular Sieve", "shelf": "Amino acids", "stock": "✅", "molecularWeight": "Variable", "casNumber": "1318-02-1", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "1-octadecanethiol", "name": "1-Octadecanethiol", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "286.56", "casNumber": "2885-00-9", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "2-chloro-2-methylpropanetert-butyl-chloride", "name": "2-Chloro-2-Methylpropanetert Butyl Chloride", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "92.57", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "agar-agar", "name": "Agar Agar", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "9002-18-0", "hazardClass": "Refer to SDS", "primaryUse": "Gel electrophoresis/culture medium", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "agarose-d-1-low-eed", "name": "Agarose D-1 Low EED", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Gel electrophoresis/culture medium", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "agarose-ii", "name": "Agarose II", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Gel electrophoresis/culture medium", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "agarose-le", "name": "Agarose LE", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "9012-36-6", "hazardClass": "Refer to SDS", "primaryUse": "Gel electrophoresis/culture medium", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ammonium-presulfate", "name": "Ammonium Presulfate", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "228.2", "casNumber": "7727-54-0", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "bacto-tryptone", "name": "Bacto Tryptone", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "bacto-yeast-extract", "name": "Bacto Yeast Extract", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "benzamide", "name": "Benzamide", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "121.14", "casNumber": "55-21-0", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "benzamidine", "name": "Benzamidine", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "120.15", "casNumber": "618-39-3", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "brilliant-blue-r", "name": "Brilliant Blue R", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "826.85", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "bromphenol-blue-sodium-salt", "name": "Bromphenol Blue Sodium Salt", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "691.94", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "fluorescein-sodium-salt", "name": "Fluorescein Sodium Salt", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "376.28", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "hexylmercaptan", "name": "Hexylmercaptan", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "118.24", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "kanamycin-monosulfate", "name": "Kanamycin Monosulfate", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "582.58", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "kanamycin-sulfate", "name": "Kanamycin Sulfate", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "582.58", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "lb-agar-lennox-1l", "name": "LB Agar Lennox 1L", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Gel electrophoresis/culture medium", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "lb-broth-lennox-1l", "name": "LB Broth Lennox 1L", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "lb-broth-lennox", "name": "LB-Broth Lennox", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "methyl-green", "name": "Methyl Green", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "458.47", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "methylene-blue-gr", "name": "Methylene Blue GR", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "319.85", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ponceau-s", "name": "Ponceau S", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "604.47", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "silver-nitrate-gel", "name": "Silver Nitrate", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "169.87", "casNumber": "7761-88-8", "hazardClass": "Corrosive, oxidizer, causes burns, stains skin permanently", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-azide", "name": "Sodium Azide", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "", "casNumber": "26628-22-8", "hazardClass": "EXTREMELY TOXIC - Fatal if ingested, explosive with metals, acute poison", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "surfact-amps-20", "name": "Surfact Amps - 20", "shelf": "Gel and Colors", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ammonium-acetate", "name": "Ammonium Acetate", "shelf": "1", "stock": "✅", "molecularWeight": "77.08", "casNumber": "631-61-8", "hazardClass": "Low toxicity, mild eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~7.0 (0.1 M solution, neutral salt)"},
    {"id": "ammonium-phosphate", "name": "Ammonium Phosphate", "shelf": "1", "stock": "", "molecularWeight": "115.03", "casNumber": "7722-76-1", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ammonium-sulfate", "name": "Ammonium Sulfate", "shelf": "1", "stock": "✅", "molecularWeight": "132.14", "casNumber": "7783-20-2", "hazardClass": "Low toxicity, mild eye/skin/respiratory irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ascorbic-acid", "name": "Ascorbic Acid", "shelf": "1", "stock": "✅", "molecularWeight": "176.12", "casNumber": "50-81-7", "hazardClass": "Very low toxicity, vitamin C, generally safe", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "betaine-hydrochloride", "name": "Betaine Hydrochloride", "shelf": "1", "stock": "✅", "molecularWeight": "153.61", "casNumber": "590-46-5", "hazardClass": "Low toxicity, mild eye/skin irritant", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "boric-acid", "name": "Boric Acid", "shelf": "1", "stock": "✅", "molecularWeight": "61.83", "casNumber": "10043-35-3", "hazardClass": "Moderate toxicity, harmful if ingested, reproductive toxin", "primaryUse": "Variable", "bufferRange": "8.5 - 10.2", "phAdjustment": "Add NaOH or KOH to create borate buffer (pH 8.5-10.2)", "startingPh": "~5.2 (0.1 M solution, weak acid)"},
    {"id": "bicine", "name": "Bicine", "shelf": "1", "stock": "✅", "molecularWeight": "163.17", "casNumber": "150-25-4", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "7.6 - 9.0", "phAdjustment": "Adjust with HCl (lower pH) or NaOH (raise pH)", "startingPh": "~8.3 (0.1 M solution)"},
    {"id": "calcium-chloride-anhydrous", "name": "Calcium Chloride Anhydrous", "shelf": "1", "stock": "✅", "molecularWeight": "110.98", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "calcium-chloride-dihydrate", "name": "Calcium Chloride Dihydrate", "shelf": "1", "stock": "✅", "molecularWeight": "147.01", "casNumber": "10035-04-8", "hazardClass": "Low toxicity, mild eye/skin irritant, hygroscopic", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "calcium-sulfate-dihydrate", "name": "Calcium Sulfate Dihydrate", "shelf": "1", "stock": "✅", "molecularWeight": "172.17", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "caps", "name": "CAPS", "shelf": "1", "stock": "✅", "molecularWeight": "221.31", "casNumber": "1135-40-6", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "9.7 - 11.1", "phAdjustment": "Adjust with HCl (lower pH) or NaOH (raise pH)", "startingPh": "~10.4 (0.1 M solution)"},
    {"id": "citric-acid-anhydrous", "name": "Citric Acid Anhydrous", "shelf": "1", "stock": "✅", "molecularWeight": "192.12", "casNumber": "77-92-9", "hazardClass": "Low toxicity, mild eye/skin irritant, food additive", "primaryUse": "Variable", "bufferRange": "3.0 - 6.2", "phAdjustment": "Add Na₂HPO₄ (raise pH) or use citric acid/citrate buffer system", "startingPh": "~2.2 (0.1 M solution)"},
    {"id": "cobaltous-chloride", "name": "Cobaltous Chloride", "shelf": "1", "stock": "✅", "molecularWeight": "129.84", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "chaps", "name": "CHAPS", "shelf": "1", "stock": "✅", "molecularWeight": "614.9", "casNumber": "75621-03-3", "hazardClass": "Low toxicity, mild eye/skin irritant, zwitterionic detergent", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "cobalt-ii-chloride-hexahydrate", "name": "Cobalt(II) Chloride Hexahydrate", "shelf": "1", "stock": "✅", "molecularWeight": "237.93", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "copper-ii-chloride-dihydrate", "name": "Copper(II) Chloride Dihydrate", "shelf": "1", "stock": "✅", "molecularWeight": "170.48", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "copper-nitrate-pentahemihydrate", "name": "Copper Nitrate Pentahemihydrate", "shelf": "1", "stock": "✅", "molecularWeight": "232.59", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "cupric-chloride-crystal", "name": "Cupric Chloride Crystal", "shelf": "1", "stock": "✅", "molecularWeight": "134.45", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "d-glucose", "name": "D-(+)-Glucose", "shelf": "2", "stock": "✅", "molecularWeight": "180.16", "casNumber": "50-99-7", "hazardClass": "Very low toxicity, food grade, generally safe", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "di-sodium-hydrogen-carbonate", "name": "Di-Sodium Hydrogen Carbonate", "shelf": "2", "stock": "✅", "molecularWeight": "84.01", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "edta", "name": "EDTA", "shelf": "2", "stock": "✅", "molecularWeight": "292.24", "casNumber": "60-00-4", "hazardClass": "Low toxicity, mild eye/skin irritant, chelating agent", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ethylenediaminetetra-acetic-acid", "name": "Ethylenediaminetetra Acetic Acid", "shelf": "2", "stock": "✅", "molecularWeight": "292.24", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ferric-chloride", "name": "Ferric Chloride", "shelf": "2", "stock": "✅", "molecularWeight": "162.2", "casNumber": "", "hazardClass": "Moderate toxicity, corrosive, causes burns", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ferrous-chloride-tetrahydrate", "name": "Ferrous Chloride Tetrahydrate", "shelf": "2", "stock": "✅", "molecularWeight": "198.81", "casNumber": "", "hazardClass": "Moderate toxicity, harmful if ingested", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "glycine", "name": "Glycine", "shelf": "2", "stock": "✅", "molecularWeight": "75.07", "casNumber": "56-40-6", "hazardClass": "Very low toxicity, amino acid, generally safe", "primaryUse": "Variable", "bufferRange": "2.2 - 3.6 and 9.0 - 10.6", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~6.1 (0.1 M solution, zwitterion)"},
    {"id": "guanidine-hydrochloride", "name": "Guanidine Hydrochloride", "shelf": "2", "stock": "✅", "molecularWeight": "95.53", "casNumber": "50-01-1", "hazardClass": "Moderate toxicity, harmful if ingested, chaotropic agent", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "glyoxylic-acid-monohydrate", "name": "Glyoxylic Acid Monohydrate", "shelf": "2", "stock": "✅", "molecularWeight": "90.04", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "hepes", "name": "HEPES", "shelf": "2", "stock": "✅", "molecularWeight": "238.3", "casNumber": "7365-45-9", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "6.8 - 8.2", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~3.0 (0.1 M solution, acidic form)"},
    {"id": "hydrochinon", "name": "Hydrochinon", "shelf": "2", "stock": "✅", "molecularWeight": "110.11", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "hydroxylamine", "name": "Hydroxylamine", "shelf": "2", "stock": "✅", "molecularWeight": "33.03", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "imidazole", "name": "Imidazole", "shelf": "2", "stock": "✅", "molecularWeight": "68.08", "casNumber": "288-32-4", "hazardClass": "Moderate toxicity, eye/skin irritant, harmful if inhaled", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "ibuprofen", "name": "Ibuprofen", "shelf": "2", "stock": "✅", "molecularWeight": "206.28", "casNumber": "15687-27-1", "hazardClass": "Moderate toxicity, NSAID, GI irritant, harmful if overdosed", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "4-dimethylaminopyridine", "name": "4-Dimethylaminopyridine", "shelf": "2", "stock": "✅", "molecularWeight": "122.17", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "1-2-bis-4-pyridyl-ethane", "name": "1,2_Bis(4-Pyridyl) Ethane", "shelf": "2", "stock": "✅", "molecularWeight": "184.24", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "4-aminomethyl-pyridine", "name": "4-(Aminomethyl) Pyridine", "shelf": "2", "stock": "✅", "molecularWeight": "108.14", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "1-4-diazabicyclo-2-2-2-octane", "name": "1,4 - Diazabicyclo [2.2.2] Octane", "shelf": "2", "stock": "✅", "molecularWeight": "112.17", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "lithium-chloride", "name": "Lithium Chloride", "shelf": "2", "stock": "✅", "molecularWeight": "84.39", "casNumber": "7447-41-8", "hazardClass": "Moderate toxicity, neurotoxic at high doses, harmful if ingested", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "lithium-bromide-extra-pure", "name": "Lithium Bromide Extra Pure", "shelf": "2", "stock": "✅", "molecularWeight": "86.85", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "magnesium-acetate-tetrahydrate", "name": "Magnesium Acetate Tetrahydrate", "shelf": "3", "stock": "✅", "molecularWeight": "214.45", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "magnesium-chloride-hexahydrate", "name": "Magnesium Chloride Hexahydrate", "shelf": "3", "stock": "✅", "molecularWeight": "203.3", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "magnesium-sulphate-7-hydrate", "name": "Magnesium Sulphate 7-Hydrate", "shelf": "3", "stock": "✅", "molecularWeight": "246.47", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "manganese-ii-chloride-anhydrous-crystalline", "name": "Manganese(II) chloride anhydrous crystalline", "shelf": "3", "stock": "✅", "molecularWeight": "125.84", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "mes-hydrate", "name": "MES hydrate", "shelf": "3", "stock": "✅", "molecularWeight": "213.25", "casNumber": "", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "5.5 - 6.7", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~6.1 (0.1 M solution)"},
    {"id": "mops", "name": "MOPS", "shelf": "3", "stock": "✅", "molecularWeight": "209.26", "casNumber": "1132-61-2", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "6.5 - 7.9", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~7.2 (0.1 M solution)"},
    {"id": "ndsb-3-1-pyridinio-1-propanesulfonate", "name": "NDSB 3-(1-Pyridinio)-1-propanesulfonate", "shelf": "3", "stock": "✅", "molecularWeight": "217.26", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "nickle-sulfate", "name": "Nickle sulfate", "shelf": "3", "stock": "✅", "molecularWeight": "154.75", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "nitrobenzyl-chloride", "name": "Nitrobenzyl Chloride", "shelf": "3", "stock": "✅", "molecularWeight": "171.58", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "pipes", "name": "PIPES", "shelf": "3", "stock": "✅", "molecularWeight": "302.37", "casNumber": "5625-37-6", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "6.1 - 7.5", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~6.8 (0.1 M solution)"},
    {"id": "potassium-acetate-crystal", "name": "Potassium acetate,crystal", "shelf": "3", "stock": "✅", "molecularWeight": "98.14", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~8.9 (0.1 M solution, basic salt)"},
    {"id": "potassium-chloride", "name": "Potassium chloride", "shelf": "3", "stock": "✅", "molecularWeight": "74.55", "casNumber": "7447-40-7", "hazardClass": "Low toxicity, safe in normal quantities", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "potassium-dichromate", "name": "Potassium dichromate", "shelf": "3", "stock": "✅", "molecularWeight": "294.18", "casNumber": "", "hazardClass": "HIGH TOXICITY - Carcinogen Category 1, corrosive, respiratory toxin", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "potassium-dihydrogen-phosphate", "name": "Potassium dihydrogen phosphate", "shelf": "3", "stock": "✅", "molecularWeight": "136.09", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "potassium-hydroxide-pellets", "name": "Potassium hydroxide, pellets", "shelf": "3", "stock": "✅", "molecularWeight": "56.11", "casNumber": "", "hazardClass": "HIGHLY CORROSIVE - Causes severe burns, eye damage", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~13 (0.1 M solution, very basic)"},
    {"id": "potassium-phosphate-monobasic-crystal", "name": "Potassium phosphate, monobasic crystal", "shelf": "3", "stock": "✅", "molecularWeight": "136.09", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "5.4 - 7.2", "phAdjustment": "Add K₂HPO₄ (raise pH) for phosphate buffer system", "startingPh": "~4.7 (0.1 M solution)"},
    {"id": "potassium-phosphate-dibasic-powder", "name": "Potassium phosphate, dibasic powder", "shelf": "3", "stock": "✅", "molecularWeight": "174.18", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "6.8 - 8.0", "phAdjustment": "Add KH₂PO₄ (lower pH) for phosphate buffer system", "startingPh": "~9.3 (0.1 M solution)"},
    {"id": "potassium-sulfate", "name": "Potassium Sulfate", "shelf": "3", "stock": "✅", "molecularWeight": "174.26", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "potassium-nitrate", "name": "Potassium Nitrate", "shelf": "3", "stock": "✅", "molecularWeight": "101.1", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "palladium-on-activated-carbon", "name": "Palladium On Activated Carbon", "shelf": "3", "stock": "✅", "molecularWeight": "Variable", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sds-pellets", "name": "SDS pellets", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Moderate toxicity, eye/skin irritant, harmful if ingested", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "silver-nitrate-4", "name": "Silver nitrate", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-acetate", "name": "Sodium acetate", "shelf": "4", "stock": "✅", "molecularWeight": "82.03", "casNumber": "", "hazardClass": "Low toxicity, mild eye/skin irritant, food additive", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~8.9 (0.1 M solution, basic salt)"},
    {"id": "sodium-bicarbonate", "name": "Sodium bicarbonate", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~8.4 (0.1 M solution)"},
    {"id": "sodium-carbonate-anhyd", "name": "Sosium carbonate anhyd", "shelf": "4", "stock": "✅", "molecularWeight": "105.99", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-hydrogen-carbonate", "name": "Sodium hydrogen carbonate", "shelf": "4", "stock": "✅", "molecularWeight": "84.01", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~8.4 (0.1 M solution)"},
    {"id": "sodium-citrate-dihydrate", "name": "Sodium citrate ,dihydrate", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-chloride", "name": "Sodium chloride", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Very low toxicity, table salt, safe in normal quantities", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-deoxycholate-monohydrate", "name": "Sodium deoxycholate ,monohydrate", "shelf": "4", "stock": "✅", "molecularWeight": "432.56", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-hydroxide-pearls", "name": "Sodium hydroxide pearls", "shelf": "4", "stock": "✅", "molecularWeight": "40", "casNumber": "", "hazardClass": "HIGHLY CORROSIVE - Causes severe burns, eye damage", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": "~13 (0.1 M solution, very basic)"},
    {"id": "sodium-dihydrogen-phosphate-monohydrate", "name": "Sodium dihydrogen phosphate monohydrate", "shelf": "4", "stock": "✅", "molecularWeight": "137.99", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-molobdat", "name": "Sodium molobdat", "shelf": "4", "stock": "", "molecularWeight": "205.92", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-phosphate-monobasic-monohydrate", "name": "Sodium phosphate monobasic, monohydrate", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-thiosulfate-anhydrous", "name": "Sodium thiosulfate anhydrous", "shelf": "4", "stock": "✅", "molecularWeight": "158.11", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-sulfate", "name": "Sodium Sulfate", "shelf": "4", "stock": "✅", "molecularWeight": "142.04", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-thiosulfate-pentahydrate", "name": "Sodium Thiosulfate Pentahydrate", "shelf": "4", "stock": "✅", "molecularWeight": "248.18", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-phosphate-dibasic-anhydrous", "name": "Sodium Phosphate, Dibasic Anhydrous", "shelf": "4", "stock": "✅", "molecularWeight": "141.96", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-nitrate", "name": "Sodium Nitrate", "shelf": "4", "stock": "✅", "molecularWeight": "84.99", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "sodium-thiocyanate", "name": "Sodium Thiocyanate", "shelf": "4", "stock": "✅", "molecularWeight": "81.07", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "thesit-solution", "name": "Thesit solution", "shelf": "4", "stock": "✅", "molecularWeight": "~583", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "thiaminiumdichlorid", "name": "Thiaminiumdichlorid", "shelf": "4", "stock": "✅", "molecularWeight": "337.27", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "tricine", "name": "Tricine", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Variable", "bufferRange": "7.4 - 8.8", "phAdjustment": "Adjust with NaOH (raise pH) or HCl (lower pH)", "startingPh": "~8.1 (0.1 M solution)"},
    {"id": "trimethyl-ammonium-bromide", "name": "Trimethyl ammonium bromide", "shelf": "4", "stock": "", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "tris-aminomethane", "name": "Tris aminomethane", "shelf": "4", "stock": "", "molecularWeight": "", "casNumber": "", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Variable", "bufferRange": "7.0 - 9.0", "phAdjustment": "Adjust with HCl (lower pH) - do not use NaOH", "startingPh": "~10.5 (0.1 M solution, basic form)"},
    {"id": "tris-hydrochloride", "name": "Tris hydrochloride", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Variable", "bufferRange": "7.0 - 9.0", "phAdjustment": "Adjust with NaOH (raise pH) or more HCl (lower pH)", "startingPh": "~4.5 (0.1 M solution, acidic form)"},
    {"id": "tris-methane-triglycidyl-ether", "name": "Tris methane triglycidyl ether", "shelf": "4", "stock": "✅", "molecularWeight": "", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "7.0 - 9.0", "phAdjustment": "Adjust with HCl (lower pH) or NaOH (raise pH)", "startingPh": "~10.0 (0.1 M solution)"},
    {"id": "tris-base", "name": "Tris(base)", "shelf": "4", "stock": "✅", "molecularWeight": "121.14", "casNumber": "77-86-1", "hazardClass": "Low toxicity, mild eye/skin irritant, biological buffer", "primaryUse": "Biological buffer", "bufferRange": "7.0 - 9.0", "phAdjustment": "Adjust with HCl (lower pH) - do not use NaOH", "startingPh": "~10.5 (0.1 M solution, basic form)"},
    {"id": "urea", "name": "Urea", "shelf": "4", "stock": "✅", "molecularWeight": "60.06", "casNumber": "57-13-6", "hazardClass": "Low toxicity, mild eye/skin irritant, naturally occurring", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "zinc-chloride", "name": "Zinc chloride", "shelf": "4", "stock": "✅", "molecularWeight": "136.3", "casNumber": "", "hazardClass": "Moderate toxicity, corrosive, harmful if ingested", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""},
    {"id": "zinc-sulfate-heptahydrate", "name": "Zinc Sulfate Heptahydrate", "shelf": "4", "stock": "✅", "molecularWeight": "287.54", "casNumber": "", "hazardClass": "Refer to SDS", "primaryUse": "Variable", "bufferRange": "", "phAdjustment": "", "startingPh": ""}
];

// ===== DATA PERSISTENCE FUNCTIONS =====

// Save data to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('chemicalInventoryData', JSON.stringify(chemicalData));
        localStorage.setItem('chemicalInventoryLastSaved', new Date().toISOString());
        console.log('✅ Data saved to localStorage');
    } catch (error) {
        console.error('❌ Failed to save data:', error);
        showToast('Failed to save data locally', 'error');
    }
}

// Load data from localStorage
function loadFromLocalStorage() {
    try {
        const savedData = localStorage.getItem('chemicalInventoryData');
        const lastSaved = localStorage.getItem('chemicalInventoryLastSaved');

        if (savedData) {
            chemicalData = JSON.parse(savedData);
            console.log('✅ Data loaded from localStorage');

            if (lastSaved) {
                const saveDate = new Date(lastSaved);
                showToast(`Data loaded from ${saveDate.toLocaleDateString()} ${saveDate.toLocaleTimeString()}`, 'info');
            } else {
                showToast('Local data loaded successfully', 'success');
            }

            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Failed to load data:', error);
        showToast('Failed to load local data', 'warning');
        return false;
    }
}

// Auto-save wrapper function
function autoSave() {
    saveToLocalStorage();
    updateStatistics();
    displayChemicals();
}

// ===== END DATA PERSISTENCE FUNCTIONS =====

// State management
let filteredData = [...chemicalData];
let expandedCards = new Set();
let nextId = 148; // For auto-generating IDs for new chemicals
let currentEditingId = null;

// DOM elements
const chemicalsContainer = document.getElementById('chemicals-container');
const noResultsContainer = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const shelfFilter = document.getElementById('shelf-filter');
const typeFilter = document.getElementById('type-filter');
const stockFilter = document.getElementById('stock-filter');
const sortSelect = document.getElementById('sort-select');
const clearFiltersBtn = document.getElementById('clear-filters');
const exportBtn = document.getElementById('export-btn');
const exportJsonBtn = document.getElementById('export-json-btn');
const addChemicalBtn = document.getElementById('add-chemical-btn');

// Modal elements
const chemicalModal = document.getElementById('chemical-modal');
const deleteModal = document.getElementById('delete-modal');
const modalTitle = document.getElementById('modal-title');
const chemicalForm = document.getElementById('chemical-form');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const modalSave = document.getElementById('modal-save');
const deleteModalClose = document.getElementById('delete-modal-close');
const deleteCancel = document.getElementById('delete-cancel');
const deleteConfirm = document.getElementById('delete-confirm');
const deleteChemicalName = document.getElementById('delete-chemical-name');

// Form elements
const chemicalNameInput = document.getElementById('chemical-name');
const shelfLocationInput = document.getElementById('shelf-location');
const molecularWeightInput = document.getElementById('molecular-weight');
const casNumberInput = document.getElementById('cas-number');
const primaryUseInput = document.getElementById('primary-use');
const hazardClassInput = document.getElementById('hazard-class');
const hazardClassCustomInput = document.getElementById('hazard-class-custom');
const bufferRangeInput = document.getElementById('buffer-range');
const startingPhInput = document.getElementById('starting-ph');
const phAdjustmentInput = document.getElementById('ph-adjustment');
const bufferSection = document.getElementById('buffer-section');

// Statistics elements
const totalCountEl = document.getElementById('total-count');
const inStockCountEl = document.getElementById('in-stock-count');
const showingCountEl = document.getElementById('showing-count');

// Toast container
const toastContainer = document.getElementById('toast-container');

// Utility functions
function generateId(name) {
    return name.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
}

function getHazardLevel(hazardClass) {
    const hazard = hazardClass.toLowerCase();
    if (hazard.includes('high toxicity') || hazard.includes('extremely toxic')) {
        return 'high-toxicity';
    } else if (hazard.includes('corrosive') || hazard.includes('oxidizer') || hazard.includes('burns')) {
        return 'moderate-toxicity';
    } else if (hazard.includes('low toxicity') || hazard.includes('generally safe')) {
        return 'low-toxicity';
    } else {
        return 'refer-sds';
    }
}

function getHazardLabel(hazardClass) {
    const level = getHazardLevel(hazardClass);
    switch (level) {
        case 'high-toxicity': return 'High Risk';
        case 'moderate-toxicity': return 'Moderate Risk';
        case 'low-toxicity': return 'Low Risk';
        default: return 'See SDS';
    }
}

function isDangerous(chemical) {
    const name = chemical.name.toLowerCase();
    const hazard = chemical.hazardClass.toLowerCase();
    return name.includes('sodium azide') || name.includes('chloramphenicol') || 
           hazard.includes('extremely toxic') || hazard.includes('high toxicity');
}

function isBuffer(chemical) {
    return chemical.primaryUse === 'Biological buffer';
}

function getSortValue(chemical, sortBy) {
    switch (sortBy) {
        case 'name': 
            return chemical.name.toLowerCase();
        case 'shelf': 
            return chemical.shelf.toLowerCase();
        case 'molecular-weight':
            const mw = parseFloat(chemical.molecularWeight);
            return isNaN(mw) ? 99999 : mw;
        case 'hazard':
            const hazardLevels = {
                'high-toxicity': 3,
                'moderate-toxicity': 2,
                'low-toxicity': 1,
                'refer-sds': 0
            };
            return hazardLevels[getHazardLevel(chemical.hazardClass)] || 0;
        default: 
            return chemical.name.toLowerCase();
    }
}


// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toastContainer.removeChild(toast), 300);
    }, 3000);
}

// Create chemical card HTML
function createChemicalCard(chemical) {
    const isInStock = chemical.stock === '✅';
    const hazardLevel = getHazardLevel(chemical.hazardClass);
    const hazardLabel = getHazardLabel(chemical.hazardClass);
    const dangerous = isDangerous(chemical);
    const buffer = isBuffer(chemical);
    const isExpanded = expandedCards.has(chemical.id);
    const pubchemLink = chemical.casNumber ? 
        `https://pubchem.ncbi.nlm.nih.gov/compound/${chemical.casNumber}` : '#';
    const sdsLink = chemical.casNumber ? 
        `https://www.google.com/search?q=${chemical.casNumber}+SDS+filetype:pdf` : '#';

    return `<div class="chemical-card ${isExpanded ? 'expanded' : ''}" onclick="toggleCard('${chemical.id}')">
        ${dangerous ? '<div class="warning-indicator">⚠️ Danger</div>' : ''}

        <div class="card-header">
            <div>
                <h3 class="chemical-name">
                    ${chemical.name}
                    ${buffer ? '<span class="buffer-indicator">Buffer</span>' : ''}
                </h3>
                <div class="chemical-details">
                    <div class="detail-item">
                        <span class="detail-label">Shelf:</span>
                        <span>${chemical.shelf}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">MW:</span>
                        <span>${chemical.molecularWeight || 'N/A'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">CAS:</span>
                        <span>${chemical.casNumber || 'N/A'}</span>
                    </div>
                </div>
            </div>

            <div class="stock-indicator ${isInStock ? 'in-stock' : 'out-of-stock'}" 
                 onclick="event.stopPropagation(); updateChemicalStock('${chemical.id}')">
                ${isInStock ? '✅' : '❌'}
            </div>

            <div class="hazard-badge ${hazardLevel}">
                ${hazardLabel}
            </div>

            <div class="card-actions">
                <button class="action-btn edit-btn" onclick="event.stopPropagation(); editChemical('${chemical.id}')" title="Edit">
                    ✏️
                </button>
                <button class="action-btn delete-btn" onclick="event.stopPropagation(); deleteChemical('${chemical.id}')" title="Delete">
                    🗑️
                </button>
            </div>
        </div>

        <div class="card-body ${isExpanded ? 'expanded' : ''}">
            <div class="expanded-details">
                <div class="detail-row">
                    <span class="detail-label">Hazard Class:</span>
                    <span class="detail-value">${chemical.hazardClass}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Primary Use:</span>
                    <span class="detail-value">${chemical.primaryUse}</span>
                </div>
                ${chemical.bufferRange ? `
                <div class="buffer-info">
                    <div class="buffer-title">Buffer Information</div>
                    <div class="detail-row">
                        <span class="detail-label">Buffer Range:</span>
                        <span class="detail-value">${chemical.bufferRange}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Starting pH:</span>
                        <span class="detail-value">${chemical.startingPh}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">pH Adjustment:</span>
                        <span class="detail-value">${chemical.phAdjustment}</span>
                    </div>
                </div>
                ` : ''}
                ${chemical.casNumber ? `
                <div class="links-section">
                    <a href="${pubchemLink}" target="_blank" class="external-link">
                        🔗 PubChem
                    </a>
                    <a href="${sdsLink}" target="_blank" class="external-link">
                        📄 SDS Search
                    </a>
                </div>
                ` : ''}
            </div>
        </div>
    </div>`;
}

// Toggle card expansion
function toggleCard(id) {
    if (expandedCards.has(id)) {
        expandedCards.delete(id);
    } else {
        expandedCards.add(id);
    }
    displayChemicals();
}

// Update chemical stock status with auto-save
function updateChemicalStock(id) {
    const chemical = chemicalData.find(c => c.id === id);
    if (chemical) {
        // Toggle stock status
        chemical.stock = chemical.stock === '✅' ? '' : '✅';

        // Auto-save after change
        autoSave();

        // Show feedback
        const status = chemical.stock === '✅' ? 'in stock' : 'out of stock';
        showToast(`${chemical.name} marked as ${status}`, 'success');
    }
}

function filterChemicals() {
    const searchTerm = searchInput.value.toLowerCase();
    const shelfFilterValue = shelfFilter.value;
    const typeFilterValue = typeFilter.value;
    const stockFilterValue = stockFilter.value;

    filteredData = chemicalData.filter(chemical => {
        const matchesSearch = chemical.name.toLowerCase().includes(searchTerm) ||
                            chemical.casNumber.toLowerCase().includes(searchTerm) ||
                            chemical.molecularWeight.toLowerCase().includes(searchTerm) ||
                            chemical.hazardClass.toLowerCase().includes(searchTerm);
        
        const matchesShelf = !shelfFilterValue || chemical.shelf === shelfFilterValue;
        
        // FIXED: Type filter logic
        let matchesType = true;
        if (typeFilterValue) {
            switch (typeFilterValue) {
                case 'buffer':
                    matchesType = isBuffer(chemical);
                    break;
                case 'dangerous':
                    matchesType = isDangerous(chemical);
                    break;
                case 'chromatography':
                    matchesType = chemical.primaryUse === 'Chromatography resin';
                    break;
                case 'gel':
                    matchesType = chemical.primaryUse === 'Gel electrophoresis/culture medium';
                    break;
                case 'variable':
                    matchesType = chemical.primaryUse === 'Variable';
                    break;
                default:
                    matchesType = true;
            }
        }
        
        const matchesStock = !stockFilterValue ||
                           (stockFilterValue === 'in' && chemical.stock === '✅') ||
                           (stockFilterValue === 'out' && chemical.stock !== '✅');

        return matchesSearch && matchesShelf && matchesType && matchesStock;
    });

    sortChemicals();
    displayChemicals();
    updateStatistics();
}


// Sort chemicals
function sortChemicals() {
    const sortBy = sortSelect.value;

    filteredData.sort((a, b) => {
        const valueA = getSortValue(a, sortBy);
        const valueB = getSortValue(b, sortBy);

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB);
        }
        return valueA - valueB;
    });
}

// Display chemicals
function displayChemicals() {
    if (filteredData.length === 0) {
        chemicalsContainer.style.display = 'none';
        noResultsContainer.style.display = 'block';
    } else {
        chemicalsContainer.style.display = 'block';
        noResultsContainer.style.display = 'none';
        chemicalsContainer.innerHTML = filteredData.map(createChemicalCard).join('');
    }
}

// Update statistics
function updateStatistics() {
    const total = chemicalData.length;
    const inStock = chemicalData.filter(c => c.stock === '✅').length;
    const showing = filteredData.length;

    totalCountEl.textContent = total;
    inStockCountEl.textContent = inStock;
    showingCountEl.textContent = showing;
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    shelfFilter.value = '';
    typeFilter.value = '';
    stockFilter.value = '';
    sortSelect.value = 'name';

    filteredData = [...chemicalData];
    sortChemicals();
    displayChemicals();
    updateStatistics();
}

// Export data functions
function exportToCsv() {
    const headers = ['Name', 'Shelf', 'Stock', 'Molecular Weight', 'CAS Number', 'Hazard Class', 'Primary Use'];
    const csvContent = [
        headers.join(','),
        ...chemicalData.map(chemical => [
            `"${chemical.name}"`,
            `"${chemical.shelf}"`,
            chemical.stock === '✅' ? 'In Stock' : 'Out of Stock',
            `"${chemical.molecularWeight}"`,
            `"${chemical.casNumber}"`,
            `"${chemical.hazardClass}"`,
            `"${chemical.primaryUse}"`
        ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chemical_inventory.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('CSV exported successfully!', 'success');
}

function exportToJson() {
    const jsonContent = JSON.stringify(chemicalData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chemical_inventory.json';
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('JSON exported successfully!', 'success');
}

// Modal functions
function openAddChemicalModal() {
    currentEditingId = null;
    modalTitle.textContent = 'Add New Chemical';
    chemicalForm.reset();
    bufferSection.style.display = 'none';
    chemicalModal.classList.remove('hidden');
}

function editChemical(id) {
    const chemical = chemicalData.find(c => c.id === id);
    if (!chemical) return;

    currentEditingId = id;
    modalTitle.textContent = 'Edit Chemical';

    chemicalNameInput.value = chemical.name;
    shelfLocationInput.value = chemical.shelf;
    molecularWeightInput.value = chemical.molecularWeight;
    casNumberInput.value = chemical.casNumber;
    primaryUseInput.value = chemical.primaryUse;
    hazardClassInput.value = chemical.hazardClass;
    bufferRangeInput.value = chemical.bufferRange || '';
    startingPhInput.value = chemical.startingPh || '';
    phAdjustmentInput.value = chemical.phAdjustment || '';

    bufferSection.style.display = chemical.primaryUse === 'Biological buffer' ? 'block' : 'none';
    chemicalModal.classList.remove('hidden');
}

function closeModal() {
    chemicalModal.classList.add('hidden');
    deleteModal.classList.add('hidden');
}

function saveChemical() {
    const name = chemicalNameInput.value.trim();
    if (!name) {
        showToast('Chemical name is required', 'error');
        return;
    }

    const chemicalData_ = {
        id: currentEditingId || generateId(name),
        name: name,
        shelf: shelfLocationInput.value.trim() || 'Unknown',
        stock: '✅',
        molecularWeight: molecularWeightInput.value.trim(),
        casNumber: casNumberInput.value.trim(),
        hazardClass: hazardClassInput.value === 'custom' ? 
                    hazardClassCustomInput.value.trim() : hazardClassInput.value,
        primaryUse: primaryUseInput.value,
        bufferRange: bufferRangeInput.value.trim(),
        startingPh: startingPhInput.value.trim(),
        phAdjustment: phAdjustmentInput.value.trim()
    };

    if (currentEditingId) {
        // Edit existing chemical
        const index = chemicalData.findIndex(c => c.id === currentEditingId);
        if (index !== -1) {
            chemicalData[index] = chemicalData_;
            showToast('Chemical updated successfully!', 'success');
        }
    } else {
        // Add new chemical
        chemicalData.push(chemicalData_);
        nextId++;
        showToast('Chemical added successfully!', 'success');
    }

    // Auto-save after adding/editing
    autoSave();
    closeModal();
}

function deleteChemical(id) {
    const chemical = chemicalData.find(c => c.id === id);
    if (!chemical) return;

    deleteChemicalName.textContent = chemical.name;
    deleteModal.classList.remove('hidden');

    // Set up delete confirmation
    deleteConfirm.onclick = () => {
        const index = chemicalData.findIndex(c => c.id === id);
        if (index !== -1) {
            chemicalData.splice(index, 1);
            autoSave(); // Auto-save after deletion
            showToast('Chemical deleted successfully!', 'success');
        }
        closeModal();
    };
}

// Event listeners
searchInput.addEventListener('input', filterChemicals);
shelfFilter.addEventListener('change', filterChemicals);
typeFilter.addEventListener('change', filterChemicals);
stockFilter.addEventListener('change', filterChemicals);
sortSelect.addEventListener('change', () => {
    sortChemicals();
    displayChemicals();
});

clearFiltersBtn.addEventListener('click', clearFilters);
exportBtn.addEventListener('click', exportToCsv);
exportJsonBtn.addEventListener('click', exportToJson);
addChemicalBtn.addEventListener('click', openAddChemicalModal);

modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modalSave.addEventListener('click', saveChemical);
deleteModalClose.addEventListener('click', closeModal);
deleteCancel.addEventListener('click', closeModal);

// Primary use change handler
primaryUseInput.addEventListener('change', (e) => {
    bufferSection.style.display = e.target.value === 'Biological buffer' ? 'block' : 'none';
});

// Hazard class change handler
hazardClassInput.addEventListener('change', (e) => {
    hazardClassCustomInput.style.display = e.target.value === 'custom' ? 'block' : 'none';
});

// Close modal when clicking overlay
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Initialize app when DOM is loaded - MODIFIED TO LOAD SAVED DATA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Chemical Inventory App Starting...');

    // Try to load saved data first
    const dataLoaded = loadFromLocalStorage();

    if (!dataLoaded) {
        console.log('📝 Using default chemical data');
        showToast('Using default chemical data', 'info');
    }

    // Initialize display
    filteredData = [...chemicalData];
    sortChemicals();
    displayChemicals();
    updateStatistics();

    console.log('✅ App initialized successfully');
});
