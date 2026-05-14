local target = "test.lua"

local function fail(message, details)
   printError("[FAIL] " .. message)
   if details ~= nil then
      printError(tostring(details))
   end
end

local function run()
   local chunk, loadErr = loadfile(target)
   if chunk == nil then
      fail("Syntax/load error in generated test.", loadErr)
      return
   end

   local ok, runtimeErr = pcall(chunk)
   if not ok then
      fail("Runtime error in generated test.", runtimeErr)
      return
   end

   print("[PASS] Generated test finished successfully.")
end

run()
os.shutdown()
